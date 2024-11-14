import {defineComponent, onMounted} from "vue";
import {RouterView} from "vue-router";
import {pingApi} from "../../api/ping.ts";

export const Home = defineComponent({
  name: 'Home',
  setup(_props, _ctx) {
    onMounted(async () => {
      console.log('[on Mounted].')
    })

    // login
    async function handlePing() {
      const ping = await pingApi()
      console.log('ping ====>', ping)
    }
    return () => (
      <div>
        <p>home</p>
        <p><button onClick={handlePing}>测试接口</button></p>
        <RouterView />
      </div>
    )
  },
})
