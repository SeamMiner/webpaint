import { computed } from "vue";
import i18n from "@/i18n";
import { Store } from "vuex";
import { useHotkey } from "vue-use-hotkey";

function shortcuts(store: Store<any>) {
  const { locale } = i18n.global;

  const paint = computed(() => store.state.paint.paint);
  const switchLang = () => {
    locale.value = locale.value === "en-US" ? "ru-RU" : "en-US";
    localStorage.setItem("webpaint:selectedLanguage", locale.value);
  };
  const switchTheme = () => store.dispatch("theme/toggle");

  const hotKeys = [
    {
      keys: ["v"],
      handler() {
        paint.value.moveTool();
      },
    },
    {
      keys: ["м"],
      handler() {
        paint.value.moveTool();
      },
    },
    {
      keys: ["m"],
      handler() {
        paint.value.magnifier();
      },
    },
    {
      keys: ["ь"],
      handler() {
        paint.value.magnifier();
      },
    },
    {
      keys: ["p"],
      handler() {
        paint.value._lineCap = "round";
        paint.value.drawTool();
      },
    },
    {
      keys: ["з"],
      handler() {
        paint.value._lineCap = "round";
        paint.value.drawTool();
      },
    },
    {
      keys: ["P"],
      handler() {
        paint.value._lineCap = "square";
        paint.value.drawTool();
      },
    },
    {
      keys: ["З"],
      handler() {
        paint.value._lineCap = "square";
        paint.value.drawTool();
      },
    },
    {
      keys: ["e"],
      handler() {
        paint.value.eraserTool();
      },
    },
    {
      keys: ["у"],
      handler() {
        paint.value.eraserTool();
      },
    },
    {
      keys: ["E"],
      handler() {
        paint.value.clear();
      },
    },
    {
      keys: ["У"],
      handler() {
        paint.value.clear();
      },
    },
    {
      keys: ["Control", "s"],
      preventDefault: true,
      handler() {
        paint.value.save();
      },
    },
    {
      keys: ["Control", "ы"],
      preventDefault: true,
      handler() {
        paint.value.save();
      },
    },
    {
      keys: ["й"],
      handler() {
        switchTheme();
      },
    },
    {
      keys: ["q"],
      handler() {
        switchTheme();
      },
    },
    {
      keys: ["ц"],
      handler() {
        switchLang();
        console.log("lang ru");
      },
    },
    {
      keys: ["w"],
      handler() {
        switchLang();
        console.log("lang en");
      },
    },
    {
      keys: ["t", "1"],
      handler() {
        paint.value._lineWidth = 3;
      },
    },
    {
      keys: ["t", "2"],
      handler() {
        paint.value._lineWidth = 5;
      },
    },
    {
      keys: ["t", "3"],
      handler() {
        paint.value._lineWidth = 10;
      },
    },
    {
      keys: ["t", "4"],
      handler() {
        paint.value._lineWidth = 15;
      },
    },
    {
      keys: ["t", "5"],
      handler() {
        paint.value._lineWidth = 20;
      },
    },
    {
      keys: ["е", "1"],
      handler() {
        paint.value._lineWidth = 3;
      },
    },
    {
      keys: ["е", "2"],
      handler() {
        paint.value._lineWidth = 5;
      },
    },
    {
      keys: ["е", "3"],
      handler() {
        paint.value._lineWidth = 10;
      },
    },
    {
      keys: ["е", "4"],
      handler() {
        paint.value._lineWidth = 15;
      },
    },
    {
      keys: ["е", "5"],
      handler() {
        paint.value._lineWidth = 20;
      },
    },
    {
      keys: ["Control", "я"],
      preventDefault: true,
      handler() {
        paint.value.undo();
      },
    },
    {
      keys: ["Control", "z"],
      preventDefault: true,
      handler() {
        paint.value.undo();
      },
    },
    {
      keys: ["Control", "y"],
      preventDefault: true,
      handler() {
        paint.value.redo();
      },
    },
    {
      keys: ["Control", "н"],
      preventDefault: true,
      handler() {
        paint.value.redo();
      },
    },
    {
      keys: ["Control", "Shift", "z"],
      preventDefault: true,
      handler() {
        paint.value.redo();
      },
    },
    {
      keys: ["Control", "Shift", "Я"],
      preventDefault: true,
      handler() {
        paint.value.redo();
      },
    },
  ];

  useHotkey(hotKeys);
}

export default shortcuts;
