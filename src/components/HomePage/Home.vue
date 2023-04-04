<template>
  <div>
    <div v-for="word in words" :key="word">
      <button @click="speak(word)">
        <box-icon name="play"></box-icon>
      </button>
      <button>
        <box-icon name="pause"></box-icon>
      </button>
      <span>{{ word }}</span>
      <br />
      <br />
    </div>
    <div>
      <span>Tốc độ</span>
      <input type="range" min="0.1" max="2" step="0.1" v-model="rate" />
      <span>{{ Math.round(rate * 100) }}%</span>
    </div>
    <div>
      <span>Âm lượng</span>
      <input type="range" min="0.1" max="1" step="0.1" v-model="volum" />
      <span>{{ Math.round(volum * 100) }}%</span>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      words: [
        "What is your name?",
        "I'm fine, thank you",
        "Where are you from?",
        "Nice to meet you",
        "How old are you?",
        "Can you help me?",
        "My first visit to Nha Trang, the coastal city, was three years ago. It was a pleasant and memorable trip",
        "Ngôn ngữ Tiếng Việt",
      ],
      voices: [],
      rate: 0.8,
      volum: 0.5,
    };
  },
  created() {
    // Lấy danh sách giọng nói trước khi tạo đối tượng SpeechSynthesisUtterance
    this.voices = window.speechSynthesis.getVoices();
  },
  methods: {
    speak(word) {
      const message = new SpeechSynthesisUtterance(word);
      message.rate = this.rate; //Tốc độ đọc
      message.pitch = 1; //độ cao của giọng nói
      message.volume = this.volum; //âm lượng
      message.lang = "en-US"; //ngôn ngữ

      let voice = this.voices.find(
        (voice) => voice.name === "Google UK English Male"
      );

      if (voice) {
        message.voice = voice;
      }

      window.speechSynthesis.speak(message);
    },
  },
};
</script>