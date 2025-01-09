//visual 슬라이드
const visual = document.getElementById('visual');
const visual_panel = visual.querySelector('.panel');
const visual_prev = visual.querySelector('.prev');
const visual_next = visual.querySelector('.next');
const visual_delay = convertSpeed(visual_panel.children[0]);
let visual_enableClick = true;
let visual_isTouching = false;
//가동범위 변수
// let moveNum = 50;

for (let i = 0; i < 2; i++) visual_panel.prepend(visual_panel.lastElementChild);

visual_next.addEventListener('click', moveNext);
visual_prev.addEventListener('click', movePrev);

function moveNext() {
	if (!visual_enableClick) return;
	visual_enableClick = false;
	visual_panel.append(visual_panel.firstElementChild);
	setTimeout(() => (visual_enableClick = true), visual_delay);
}

function movePrev() {
	if (!visual_enableClick) return;
	visual_enableClick = false;
	visual_panel.prepend(visual_panel.lastElementChild);
	setTimeout(() => (visual_enableClick = true), visual_delay);
}

function convertSpeed(el) {
	return parseFloat(getComputedStyle(el).transitionDuration) * 1000;
}

//웹에서 드레그

visual_panel.addEventListener('mousedown', (e) => {
	startX = e.clientX;
	visual_isTouching = true;
});

visual_panel.addEventListener('mousemove', (e) => {
	if (!visual_isTouching) return;
	const mouseX = e.clientX;
	const mouseDiff = startX - mouseX;
	//가동 범위 50으로 설정.
	if (mouseDiff > 50) {
		moveNext();
		visual_isTouching = false;
	} else if (mouseDiff < -50) {
		movePrev();
		visual_isTouching = false;
	}
});

visual_panel.addEventListener('mouseup', () => {
	visual_isTouching = false;
});

visual_panel.addEventListener('mouseleave', () => {
	visual_isTouching = false;
});

///모바일 터치

visual_panel.addEventListener('touchstart', (e) => {
	startX = e.touches[0].clientX;
	visual_isTouching = true;
});

visual_panel.addEventListener('touchmove', (e) => {
	if (!visual_isTouching) return;
	const touchX = e.touches[0].clientX;
	const touchDiff = startX - touchX;

	if (touchDiff > 50) {
		moveNext();
		visual_isTouching = false;
	} else if (touchDiff < -50) {
		movePrev();
		visual_isTouching = false;
	}
});

visual_panel.addEventListener('touchend', () => {
	visual_isTouching = false;
});
