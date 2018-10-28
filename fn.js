export const summ = (v1,v2) => {
	return [v1[0]+v2[0], v1[1] + v2[1]];
}

export const subt = (v1,v2) => {
	return [v1[0] - v2[0], v1[1] - v2[1]];
}

export const mult = (v1, n1, n2) => {
	return [v1[0] * n1, v1[1] * (n2 ? n2 : n1)];
}