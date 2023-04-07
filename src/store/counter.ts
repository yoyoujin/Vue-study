import { defineStore } from 'pinia'

// state type
interface CounterState {
  count: number
}

// store type
export const useCounterStore = defineStore({
  id: 'counter', // 스토어의 고유 식별자
  state: (): CounterState => ({
    // 초기상태를 나타내는 객체를 반환하는 함수
    count: 0
  }),
  getters: {
    // 상태를 기반으로 계산된 값을 반환하는 함수를 포함
    doubleCount(): number {
      return this.count * 2
    }
  },
  actions: {
    // 상태를 변경하는 함수를 포함
    increment() {
      this.count++
    },
    async incrementAsync() {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.count++
    }
  }
})

// 컴포넌트에서는 useCounterStore()를 호출하여 스토어의 인스턴스를 생성하고,
// getters와 actions를 호출하여 상태를 변경할 수 있음.
// 스토어의 인스턴스는 앱 전체에서 공유되므로, 컴포넌트가 언마운트되더라도 상태가 유지됨
// Pinia는 TypeScript 타입 시스템을 이용하여 getters와 actions의 호출을 안전하게 보장함
