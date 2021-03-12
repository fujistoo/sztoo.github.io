<template>
  <div class="divider div-transparent div-dot"></div>
</template>

<style scoped>
.divider {
	position: relative;
	margin-top: 10px;
	margin: auto;
	height: 1px;
	text-align: center;
}

.div-transparent:before {
	content: "";
	position: absolute;
	top: 0;
	left: 5%;
	right: 5%;
	width: 90%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, rgb(48,49,51), transparent);
}

.div-dot:after {
	content: "";
	position: absolute;
	z-index: 1;
	top: -7px;
	left: calc(50% - 7px);
	width: 15px;
	height: 15px;
	background-color: #8398b6;
	border: 1px solid #6b87af;
	border-radius: 50%;
	box-shadow: inset 0 0 0 2px white,
					0 0 0 4px white;
}

@media screen and (max-width: 426px) {
	.divider {
		display: none;
	}
}

@media screen and (max-width: 1024px) {
	.div-dot:after {
		top: -5px;
		left: calc(50% - 5px);
		height: 9px;
		width: 9px;
	}
}
</style>