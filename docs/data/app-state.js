const CURA_STATE = {

    // 使用者
    currentCustomer: null,


    // Taste Companion
    tasteProfile: {
        freshness: 50,
        complexity: 50,
        texture: 50,
        aroma: 50,
        exploration: 50
    },


    // 選擇中的 Pizza
    selectedItems: [],


    // 訂單
    currentOrder: null,


    // CRM
    customerHistory: [],


    // 營運
    inventoryStatus: {},


    // Dashboard
    analytics: {},


    // ESG
    sustainability: {
        carbonSaved: 0,
        greenPoints: 0
    }

};