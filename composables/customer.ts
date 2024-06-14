export const useCustomer = () => {
    const customerName = useState("customerName", () => "");
    const hasNameError = computed(() => customerName.value.length < 2);
    return {customerName, hasNameError}
}