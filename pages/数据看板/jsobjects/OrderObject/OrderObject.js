export default {
	myVar1: [],
	myVar2: {},
	getPieChartData: async () => {
		let res = get_orders.data
		return res.map(item => {
			return {
				value: item.price * item.count,
				name: item.customerName,
			}
		})
	},
	getProductData: async () => {
		let res = get_orders.data
		return res.map(item => {
			return {
				value: item.price * item.count,
				name: item.productName,
			}
		})
	},
	addOrder: async () => {
		// write code here
		let res = await add_order.run(add_order_form.formData)
		closeModal("add_order_form_modal")
		showAlert("订单新增成功")
		get_orders.run()
	},
	deleteOrder: async (params) => {
		//use async-await or promises
		try{
				await delete_order.run(params)
				console.log('params:123', params)
				showAlert("订单删除成功")
				closeModal("delete_order_modal")
				get_orders.run()
    }catch(error){
				showAlert("订单删除失败")
    }
	}
}