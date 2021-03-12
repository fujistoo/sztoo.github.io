<template>
	<div :class="`icon ${wrapperClass}`">
		<svg><use :xlink:href="`#${kind}`"></use></svg>
	</div>
</template>

<script>
export default {
	props: {
		kind: String,
		wrapperClass: String,
	},
};
</script>

<style>
.icon {
	display: inline-flex;
	align-self: center;
	position: relative;
	height: 4vh;
	width: 4vw;
}

@media screen and (max-width: 426px) {
	.icon {
		height: 1.5em;
		width: 1.5em;
		margin-left: 10px;
		margin-right: 10px;
	}
}

@media screen and (max-width: 769px) {
	.icon {
		height: 1.5em; 
		width: 1.5em; 
		margin-left: 20px;
		margin-right: 20px;
	}
}
</style>