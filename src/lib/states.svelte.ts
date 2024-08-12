export let isDisplayed = $state<{ visible: boolean; isRegister: undefined | boolean }>({
	visible: false,
	isRegister: undefined
});
export let steps = $state({
	total: [0, 1, 2, 3],
	currentStep: 0
});
