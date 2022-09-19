const DISPLAY_SIZE = 400;

function createGrid(display, squaresPerSide)
{
	while (display.firstChild) display.removeChild(display.firstChild);

	const squareSize = DISPLAY_SIZE / squaresPerSide;

	for (let i = 0; i < squaresPerSide * squaresPerSide; i++)
	{
		const square = document.createElement('div');
		square.className = 'square';
		square.style.width = `${squareSize}px`
		square.style.height = `${squareSize}px;`;
		square.onmouseover = () => square.style.backgroundColor = 'black';
		display.appendChild(square);
	}
}

window.onload = function()
{
	const display = document.getElementById('display');
	display.style = `width: ${DISPLAY_SIZE}px; height: ${DISPLAY_SIZE}px`;

	createGrid(display, 16);

	const newGrid = document.getElementById('new-grid');
	newGrid.onclick = () =>
	{
		const dimensions = prompt('How many squares per side?');
		createGrid(display, dimensions);
	}
};