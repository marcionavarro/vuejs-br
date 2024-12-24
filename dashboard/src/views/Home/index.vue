<template>
  <div>
    <custom-header
      @create-account="handleCreateAccount"
      @login="handleLogin"
    />
    <contact />
    <div class="flex justify-center py-10 bg-brand-gray">
      <p class="font-medium text-center text-gray-800">feedbacker &#169;2024</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import useModal from '@/hooks/useModal'
import CustomHeader from './CustomHeader.vue';
import Contact from './Contact.vue';

export default defineComponent({
  components: { CustomHeader, Contact },
  setup() {
    const router = useRouter()
    const modal = useModal()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedback' })
      }
    })

    function handleLogin() {
      modal.open({
        component: 'ModalLogin'
      })
    }

    function handleCreateAccount() {
      modal.open({
        component: 'ModalCreateAccount'
      })
    }

    return {
      handleLogin,
      handleCreateAccount
    }
  },
})
</script>


