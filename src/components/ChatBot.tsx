import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { HfInference } from "@huggingface/inference";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const hf = new HfInference(
  import.meta.env.VITE_REACT_APP_HUGGING_FACE_API_KEY || ""
);

const predefinedResponses: { keywords: string[]; response: string }[] = [
  {
    keywords: ["c'est quoi", "constat amiable", "définition"],
    response:
      "Un constat amiable est un document utilisé pour décrire les circonstances d’un accident entre deux véhicules. Il est signé sur place par les deux conducteurs.",
  },
  {
    keywords: ["obligatoire", "dois-je", "faut-il", "remplir"],
    response:
      "Le constat amiable n’est pas obligatoire, mais fortement recommandé. Il facilite les démarches avec l’assurance.",
  },
  {
    keywords: ["pas de blessé", "dommages", "juste matériel"],
    response:
      "Oui, le constat amiable est valable même sans blessé. Il sert aussi pour les dommages matériels.",
  },
  {
    keywords: ["refuse de signer", "l'autre conducteur", "ne veut pas"],
    response:
      "Note le refus, prends des photos, indique l'immatriculation, et contacte la police si nécessaire. Envoie tout à ton assurance.",
  },
  {
    keywords: ["cases", "partie centrale", "cocher"],
    response:
      "Coche uniquement les cases qui décrivent ta situation lors de l'accident. Tu peux en cocher plusieurs si nécessaire.",
  },
  {
    keywords: ["véhicule A", "véhicule B"],
    response:
      "Vous choisissez ensemble qui est A et qui est B. Ce n’est pas lié à la responsabilité.",
  },
  {
    keywords: ["modifier", "changement", "erreur", "après signature"],
    response:
      "Non, une fois signé par les deux, le constat est définitif. Pour toute modification, contacte ton assurance séparément.",
  },
  {
    keywords: ["observation", "comment rédiger", "champ libre"],
    response:
      'L’observation n’est pas obligatoire mais conseillée. Sois factuel et clair : "Le véhicule A était à l\'arrêt quand le B l’a percuté à l’arrière".',
  },
  {
    keywords: ["photo", "prendre des photos"],
    response:
      "Oui ! Prends des photos des dégâts, des plaques, de la scène, des documents de l'autre conducteur. Très utile comme preuve.",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! Je suis votre assistant pour le constat amiable. Comment puis-je vous aider aujourd'hui ?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getConstatResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    for (const { keywords, response } of predefinedResponses) {
      if (keywords.some((kw) => msg.includes(kw))) {
        return response;
      }
    }

    return 'Je peux vous aider à remplir un constat amiable : posez-moi une question comme "que faire si l\'autre refuse de signer ?" ou "quelles cases cocher ?"';
  };

  const generateResponse = async (userMessage: string): Promise<string> => {
    const fallback = getConstatResponse(userMessage);

    try {
      const prompt = `Tu es un assistant spécialisé dans les constats amiables en France. Réponds de manière claire et concise à cette question sur le constat amiable: ${userMessage}`;

      const response = await hf.textGeneration({
        model: "microsoft/DialoGPT-medium",
        inputs: prompt,
        parameters: {
          max_new_tokens: 150,
          temperature: 0.7,
          return_full_text: false,
        },
      });

      return response.generated_text || fallback;
    } catch (error) {
      console.error("Erreur API Hugging Face:", error);
      return fallback;
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText("");
    setIsLoading(true);

    try {
      const botResponse = await generateResponse(currentInput);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Désolé, je ne peux pas répondre pour le moment. Veuillez réessayer plus tard.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white p-5 rounded-full shadow-2xl hover:scale-110 hover:shadow-purple-400/40 transition-all duration-300 z-40 border-4 border-white/60 backdrop-blur-lg ${
          isOpen ? "scale-0" : "scale-100"
        } animate-fade-in`}
        style={{ boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-96 h-[520px] bg-white/90 rounded-3xl shadow-2xl border-2 border-blue-200 z-50 transition-all duration-300 backdrop-blur-lg ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } animate-fade-in`}
        style={{ boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white p-5 rounded-t-3xl flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6" />
            <span className="font-bold tracking-wide text-lg drop-shadow">
              Assistant Constat
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 p-2 rounded-full transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-5 h-80 overflow-y-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-b-2xl animate-fade-in">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                } animate-fade-in`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-5 py-3 rounded-2xl shadow-md ${
                    message.isUser
                      ? "bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white"
                      : "bg-white/80 text-gray-800 border border-blue-100"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                      <Bot className="h-10 w-10 mt-1 text-blue-600" />
                    )}
                    {message.isUser && <User className="h-4 w-4 mt-1" />}
                    <p className="text-sm whitespace-pre-line font-medium">
                      {message.text}
                    </p>
                  </div>
                  <p className="text-xs opacity-70 mt-1 text-right">
                    {message.timestamp.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white/80 text-gray-800 border border-blue-100 px-5 py-3 rounded-2xl shadow-md flex items-center space-x-2">
                  <Bot className="h-10 w-10 text-blue-600" />
                  <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                  <span className="text-sm font-medium">
                    En train d'écrire...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-5 border-t border-blue-100 bg-white/80 rounded-b-3xl">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Posez votre question..."
              className="flex-1 border border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/70 shadow-inner text-base font-medium"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="btn-sexy flex items-center justify-center p-0 w-12 h-12 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
