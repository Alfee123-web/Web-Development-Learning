function printhello() {
    console.log("hello!");
}

function printBie() {
    console.log("bieee");
} 

function handleDbClick() {
    console.log("good morning");
}

export default function Button() {
    return (
        <div>
            <button onClick={printhello}>Click Me</button>
            <p onMouseOver={printBie}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta accusamus aliquid. Consectetur porro aut ad explicabo minima quaerat laudantium, fugiat nesciunt doloremque reprehenderit tempore accusamus ullam expedita ut necessitatibus.</p>
            <button onDoubleClick={handleDbClick}>save me</button>
        </div>
    );
}