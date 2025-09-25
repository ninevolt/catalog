
import { defineStore } from 'pinia';

export const useCatalog = defineStore('catalog', () => {
    const items = ref<TypeCatalog.Product[]>();
    const isLoading = ref(false);

    const fetch = async function (query = {}) {
        isLoading.value = true;

        const response = await useFetch('/api/catalog', { query });

        if (response.error?.value) {
            throw createError ({
                statusCode: 404,
                statusMessage: 'Page Not Found',
                fatal: true,
            });
        }

        items.value = response.data?.value?.products || [];
        isLoading.value = false;
    };

    return {
        items,
        fetch,
        isLoading,
    };
})
