import { useState, useEffect, useRef } from "react";

export default function Assistant() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [latestScore, setLatestScore] = useState(null);
  const [conversationStage, setConversationStage] = useState(null);
  const [emotionState, setEmotionState] = useState({
    stress: 0,
    low: 0,
    motivation: 0,
    energy: 0
  });

  const chatEndRef = useRef(null);

  // ---------------- INITIAL LOAD ----------------

  useEffect(() => {

    const history = JSON.parse(localStorage.getItem("moodHistory")) || [];

    if (history.length > 0) {
      setLatestScore(Number(history[history.length - 1].score));
    }

    setMessages([
      {
        role: "bot",
        content:
          "Hi 🌿 I'm your wellbeing assistant.\nTell me how you're feeling today."
      }
    ]);

  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ---------------- EMOTION TRACKING ----------------

  const updateEmotion = (type) => {
    setEmotionState(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  // ---------------- HABIT STORAGE ----------------

  const saveHabit = (habit) => {

    const stored = JSON.parse(localStorage.getItem("habitMemory")) || [];

    const updated = [...stored, habit];

    localStorage.setItem("habitMemory", JSON.stringify(updated));
  };

  // ---------------- ACTIVITY LIBRARY ----------------

  const activityLibrary = {

    stress: [
      "Take a slow 5 minute breathing break.",
      "Go for a short walk outside.",
      "Write down the 3 biggest stress triggers today."
    ],

    low: [
      "Write 3 things you are grateful for.",
      "Listen to calming music.",
      "Send a message to a friend or family member."
    ],

    focus: [
      "Try a 25-minute deep focus session.",
      "Remove phone notifications for 1 hour.",
      "Set one small task you can finish now."
    ],

    energy: [
      "Drink a glass of water.",
      "Do 20 jumping jacks.",
      "Step outside for sunlight."
    ]

  };

  const randomItem = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  // ---------------- RESPONSE ENGINE ----------------

  const generateResponse = (text) => {

    const t = text.toLowerCase();

    // ---- multi step stress followup ----

    if (conversationStage === "stress_followup") {

      setConversationStage(null);

      return `Thank you for sharing that.

Here are some quick steps that may help:

• ${randomItem(activityLibrary.stress)}
• Try 4-4 breathing for 2 minutes
• Reduce one pressure source today`;
    }

    // ---- stress detection ----

    if (t.includes("stress")) {

      updateEmotion("stress");

      setConversationStage("stress_followup");

      return "What is causing the most stress right now?";
    }

    // ---- low mood detection ----

    if (t.includes("sad") || t.includes("low") || t.includes("down")) {

      updateEmotion("low");

      return `I'm sorry you're feeling low.

Here is a small activity that can help:

• ${randomItem(activityLibrary.low)}

Small positive actions can improve emotional state quickly.`;
    }

    // ---- motivation ----

    if (t.includes("motivation") || t.includes("goal")) {

      updateEmotion("motivation");

      return `Let's rebuild momentum.

Try this approach:

1️⃣ Choose ONE task  
2️⃣ Work for 15 minutes  
3️⃣ Take a short break

Starting small builds motivation quickly.`;
    }

    // ---- energy ----

    if (t.includes("energy") || t.includes("tired")) {

      updateEmotion("energy");

      return `Quick energy reset:

• ${randomItem(activityLibrary.energy)}
• Deep breathing for 1 minute
• Stretch your shoulders and neck`;
    }

    // ---- activity suggestions ----

    if (t.includes("activity") || t.includes("suggest")) {

      return `Here are a few wellbeing activities:

• ${randomItem(activityLibrary.stress)}
• ${randomItem(activityLibrary.low)}
• ${randomItem(activityLibrary.energy)}

Choose the one that feels easiest right now.`;
    }

    // ---- habit tracking ----

    if (t.includes("habit")) {

      const habitText = text.replace("habit", "").trim();

      if (habitText.length > 3) {

        saveHabit(habitText);

        return `Habit saved:

"${habitText}"

Track it daily for 7 days to build consistency.`;
      }

      return "Tell me the habit you'd like to build.";
    }

    // ---- emotional analysis ----

    if (t.includes("analysis")) {

      return `Session Emotional Signals

Stress: ${emotionState.stress}
Low Mood: ${emotionState.low}
Motivation: ${emotionState.motivation}
Energy: ${emotionState.energy}

Recommendation:

Balance productivity with recovery and positive activities.`;
    }

    // ---- subtle score adaptation ----

    if (latestScore !== null && latestScore < 3) {

      return `Your recent wellbeing score suggests you may need recovery.

Helpful actions today:

• Light outdoor activity
• Earlier sleep
• Social connection`;
    }

    return "Tell me more about what's going on and I'll try to guide you with practical steps.";
  };

  // ---------------- SEND MESSAGE ----------------

  const sendMessage = () => {

    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };

    setMessages(prev => [...prev, userMsg]);

    const response = generateResponse(input);

    setInput("");

    // typing delay
    setTimeout(() => {

      const botMsg = { role: "bot", content: response };

      setMessages(prev => [...prev, botMsg]);

    }, 500);
  };

  // ---------------- QUICK SUGGESTIONS ----------------

  const quickPrompt = (text) => {

    setInput(text);

  };

  // ---------------- UI ----------------

  return (

    <div className="chat-container">

      <div className="chat-header">
        Wellbeing Assistant
      </div>

      <div className="chat-window">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`message ${msg.role}`}
          >
            {msg.content}
          </div>

        ))}

        <div ref={chatEndRef} />

      </div>

      {/* QUICK PROMPTS */}

      <div style={{
        display: "flex",
        gap: "10px",
        marginBottom: "10px",
        flexWrap: "wrap"
      }}>

        <button onClick={() => quickPrompt("I feel stressed")}>
          Stress Help
        </button>

        <button onClick={() => quickPrompt("suggest activity")}>
          Suggest Activity
        </button>

        <button onClick={() => quickPrompt("habit exercise daily")}>
          Create Habit
        </button>

        <button onClick={() => quickPrompt("analysis")}>
          Emotional Analysis
        </button>

      </div>

      <div className="chat-input-row">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Share what’s on your mind..."
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}