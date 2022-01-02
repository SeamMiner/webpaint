import { customRef, Ref } from 'vue';

function useDebouncedRef(value: any, delay = 200): Ref<any> {
  let timeout: number | undefined;
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}

export default useDebouncedRef