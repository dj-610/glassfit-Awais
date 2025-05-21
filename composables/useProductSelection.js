// composables/useProductSelection.js

import { reactive } from 'vue'

const state = reactive({
  selectedProduct: null,
  customOptions: {
    visionNeed: '',
    prescription: '',
    color: '',
    lensBrand: '',
    design: '',
    thickness: '',
    finishings: '',
    protectionPlan: '',
    totalPrice: 0,
  }
})

export const useProductSelection = () => {
  const selectedProduct = useState('selectedProduct', () => null)
  return {
    selectedProduct
  }
}
