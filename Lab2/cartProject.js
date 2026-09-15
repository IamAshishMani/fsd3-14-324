import readline from "readline/promises"
import {stdin, stdout} from "process"
import {readFile, writeFile} from "fs/promises"


// databse using file

const FILE = "products.json";   


const getCart = async () => {
    try {
        const data = await readFile(FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

const saveCart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));
}

const addToCart = async (product) => {
    const cart = await getCart();
    const isProductExist = cart.find((p) => p.id === product.id);
    if(isProductExist) {
        isProductExist.qty += product.qty;
    } else {
        cart.push(product);
    }
    await saveCart(cart);

    console.log(`${product.name} added to cart successfully!`);
}

const removeFromCart = async (productId) => {
    const cart = await getCart();
    const updatedCart = cart.filter((p) => p.id !== productId);
    await saveCart(updatedCart);
}   


const displayCart = async () => {
    const cart = await getCart();
    if(cart.length === 0) {
        console.log("Cart is empty");
        return;
    }

    console.log("Your Cart:");
    console.table(cart)
    const total = cart.reduce((acc, product) => acc + (product.price * product.qty), 0);
    console.log(`Total: $${total.toFixed(2)}`);
    // cart.forEach((product) => {
    //     console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Qty: ${product.qty}`);
    // });
}

const main = async () => {
    let choice;
    const cin  = readline.createInterface({input: stdin, output: stdout});
    do {
        console.log("Welcome to Amazon Shopping 🛍️")
        console.log("1 -> Show Cart")
        console.log("2 -> Add Product")
        console.log("3 -> Remove Product")
        console.log("4 -> Update Qty.")
        console.log("5 -> Checkout")
        choice = await cin.question("Enter your choice");

        switch (parseInt(choice)) {
            case 1:
                await displayCart();
                break;
            case 2: 
                const item = await cin.question("Enter product details (id,name,price,qty): ");
                const [id, name, price, qty] = item.split(",");
                await addToCart({id, name, price: parseFloat(price), qty: parseInt(qty)});
                break;
            case 3:
                const productId = await cin.question("Enter product ID to remove: ");
                await removeFromCart(productId);
                break;
            case 4:
                console.log("> Update Qty.")
                break;
            case 5:
                console.log("> Checkout")
                break;
            default:
                console.log("> Invalid Choice")
                break;  
        }

    } while(choice != 5)
    
    cin.close()
   
}


main();