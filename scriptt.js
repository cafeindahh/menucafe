const menuData = [
    {
        category: "Nasi Goreng",
        type: "makanan",
        items: [
            { name: "Nasi Goreng Biasa", price: 17000 },
            { name: "Nasi Goreng Jakarta", price: 19000 },
            { name: "Nasi Goreng Terasi", price: 19000 },
            { name: "Nasi Goreng Terasi Pedas", price: 19000 },
            { name: "Nasi Goreng Merah Spesial", price: 23000 },
            { name: "Nasi Goreng Kecap Spesial", price: 23000 },
            { name: "Nasi Goreng Putih Spesial", price: 23000 },
            { name: "Nasi Goreng Ikan Asin", price: 20000 },
            { name: "Nasi Goreng Terasi dan Ikan Asin", price: 22000 },
            { name: "Nasi Goreng Komplit", price: 25000 }
        ]
    },
    {
        category: "Nasi Ayam",
        type: "makanan",
        items: [
            { name: "Nasi Ayam Lalapan", price: 30000 },
            { name: "Nasi Ayam Geprek", price: 30000 },
            { name: "Nasi Putih", price: 5000 }
        ]
    },
    {
        category: "Mie",
        type: "makanan",
        items: [
            { name: "Mie Kuah Biasa", price: 18000 },
            { name: "Mie Kuah Spesial", price: 22000 },
            { name: "Mie Goreng Biasa", price: 18000 },
            { name: "Mie Goreng Spesial", price: 22000 },
            { name: "Mie Bakso", price: 17000 }
        ]
    },
    {
        category: "Indomie",
        type: "makanan",
        items: [
            { name: "Indomie Soto dan Telur", price: 15000 },
            { name: "Indomie Kaldu dan Telur", price: 15000 },
            { name: "Indomie Goreng dan Telur", price: 15000 },
            { name: "Indomie Jumbo dan Telur", price: 20000 },
            { name: "Indomie Kaldu", price: 10000},
            { name: "Indomie Goreng", price: 10000 },
            { name: "Indomie Soto", price: 10000 },
            { name: "Kacang", price: 5000 },
        ]
    },
    {
        category: "Gorengan",
        type: "makanan",
        items: [
            { name: "Pisang Peppe", price: 15000 },
            { name: "Pisang Goreng Original", price: 13000 },
            { name: "Pisang Goreng Coklat", price: 17000 },
            { name: "Pisang Goreng Keju", price: 17000 },
            { name: "Pisang Nugget Original", price: 15000 },
            { name: "Pisang Nugget Coklat", price: 17000 },
            { name: "Pisang Nugget Milo", price: 17000 },
            { name: "Pisang Nugget Keju", price: 17000 },
            { name: "Pisang Nugget (Mix 2 rasa)", price: 20000 },
            { name: "Pisang Goreng (Mix 2 rasa)", price: 20000 },
            { name: "Pisang Goreng Palem Sugar", price: 17000 },
            { name: "Pisang Roll Keju", price: 17000 },
            { name: "Pisang Roll Milo", price: 17000 },
            { name: "Pisang Roll Coklat", price: 17000 },
            { name: "Pisang Roll Palem Sugar", price: 17000 },
            { name: "Pisang Roll (Mix 2 rasa)", price: 20000 },
            { name: "Kentang Goreng", price: 17000 },
            { name: "Ubi Goreng", price: 13000 }
        ]
    },
    {
        category: "Roti Bakar",
        type: "makanan",
        items: [
            { name: "Roti Bakar Coklat", price: 17000 },
            { name: "Roti Bakar Keju", price: 17000 },
            { name: "Roti Bakar Mentega Gula", price: 17000 },
            { name: "Roti Bakar Palem Sugar", price: 17000 },
            { name: "Roti Bakar Milo", price: 17000 },
            { name: "Roti Bakar (Mix 2 rasa)", price: 20000 },   
        ]
    },
    {
        category: "Juice",
        type: "minuman",
        items: [
            { name: "Juice Alpokat", price: 18000 },
            { name: "Juice Durian", price: 18000 },
            { name: "Juice Sirsak", price: 18000 },
            { name: "Juice Nangka", price: 18000 },
            { name: "Juice Buah Naga", price: 18000 },
            { name: "Juice Melon", price: 18000 },
            { name: "Juice Mangga", price: 18000 },
            { name: "Juice Apel", price: 18000 },
            { name: "Juice Wortel", price: 17000 },
            { name: "Juice Tomat", price: 17000 },
            { name: "Juice Jeruk", price: 18000 }
        ]
    },
    {
        category: " Minuman Dingin",
        type: "minuman",
        items: [
            { name: "Teh Tarik", price: 15000 },
            { name: "Capucino", price: 15000 },
            { name: "Milo", price: 15000 },
            { name: "Lemon Press", price: 15000 },
            { name: "Lemon Tea", price: 15000 },
            { name: "Sirup Susu", price: 13000 },
            { name: "Green Tea", price: 18000 },
            { name: "Thai Tea", price: 18000 },
            { name: "Es Teh", price: 8000 },
            { name: "Es Teh Jumbo", price: 15000 }
        ]
    },
    {
        category: "Minuman Panas",
        type: "minuman",
        items: [
            { name: "Sarabba Susu", price: 10000 },
            { name: "Sarabba Biasa", price: 5000 },
            { name: "Sarabba Susu dan Telur", price: 15000 },
            { name: "Sarabba Susu, Telur dan Madu", price: 18000 },
            { name: "Capucino Susu", price: 10000 },
            { name: "Milo Susu", price: 10000 },
            { name: "Kopi Susu", price: 10000 },
            { name: "Kopi Hitam", price: 6000 },
            { name: "Teh Susu", price: 10000 },
            { name: "Teh Biasa ", price: 6000 },
            { name: "Teh Biasa Jumbo", price: 10000 },
            { name: "Nescafe Susu", price: 10000 },
            { name: "Coffeemix Susu", price: 10000 },
            { name: "Jeruk Hangat", price: 15000 },
            { name: "Green Tea Panas", price: 15000 },
            { name: "Thai Tea Panas", price: 15000 },
            { name: "Ovaltine Panas", price: 10000 },
            { name: "Lemon Tea Panas", price: 10000 },
            { name: "Lemon Press Panas", price: 13000 }
        ]
    },
    {
        category: "Botol Kaleng",
        type: "minuman",
        items: [
            { name: "Extra Joss", price: 10000 },
            { name: "Kukubima", price: 10000 },
            { name: "Soda Susu", price: 15000 },
            { name: "Karating Daeng", price: 10000 },
            { name: "Maizone", price: 10000 },
            { name: "Susu Beruang", price: 15000 },
            { name: "You C1000", price: 15000 },
            { name: "Fanta Susu", price: 13000 },
            { name: "Sprite Susu", price: 13000 },
            { name: "Cocacola Susu", price: 13000 },
            { name: "Pulpy", price: 10000 },
            { name: "Teh Pucuk", price: 5000 },
            { name: "Air Botol", price: 5000 },
            { name: "Pocari Sweat", price: 10000 }
        ]
    }
];

// Menjalankan filterMenu saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    filterMenu('all');
});

// Fungsi untuk menampilkan menu sesuai kategori
function filterMenu(filterType) {
    document.getElementById("menu-container").classList.remove("hidden"); // Pastikan menu tampil
    document.getElementById("payment-container").classList.add("hidden"); // Sembunyikan pembayaran

    const container = document.getElementById("menu-container");
    container.innerHTML = ""; // Kosongkan kontainer sebelum diisi ulang

    menuData.forEach(menuCategory => {
        if (filterType === "all" || menuCategory.type === filterType) {
            const menuCard = document.createElement("div");
            menuCard.className = "bg-white p-5 rounded-lg shadow-md text-center opacity-0 translate-y-5 transition-all duration-500";

            // Tombol Pilih Varian dengan warna baru + animasi hover
            let variantsHTML = `
                <button class="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 hover:from-teal-600 hover:to-blue-600 transition-transform duration-300 ease-in-out mb-3"
                    onclick="toggleVariants('${menuCategory.category}')">
                    Pilih Varian
                </button>
                <div id="variants-${menuCategory.category}" class="hidden space-y-2 mt-3">
            `;

            menuCategory.items.forEach(item => {
                const formattedPrice = new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0
                }).format(item.price);

                variantsHTML += `
                    <div class="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-md opacity-0 translate-y-3 transition-all duration-500">
                        <span class="text-lg font-medium">${item.name}</span>
                        <span class="text-gray-700 font-semibold">${formattedPrice}</span>
                    </div>
                `;
            });

            variantsHTML += `</div>`; // Tutup div varian

            menuCard.innerHTML = `
                <p class="text-xl font-semibold mb-3">${menuCategory.category}</p>
                ${variantsHTML}
            `;

            container.appendChild(menuCard);
            
            // Memicu animasi fade-in
            setTimeout(() => {
                menuCard.classList.remove("opacity-0", "translate-y-5");
            }, 100);
        }
    });
}

// Fungsi untuk menampilkan atau menyembunyikan varian menu dengan animasi
function toggleVariants(category) {
    const variantDiv = document.getElementById(`variants-${category}`);
    variantDiv.classList.toggle("hidden");
    
    if (!variantDiv.classList.contains("hidden")) {
        const items = variantDiv.querySelectorAll("div");
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove("opacity-0", "translate-y-3");
            }, index * 100);
        });
    }
}

// Fungsi untuk menampilkan atau menyembunyikan pembayaran
function togglePayment() {
    const menuContainer = document.getElementById("menu-container");
    const paymentContainer = document.getElementById("payment-container");

    if (paymentContainer.classList.contains("hidden")) {
        menuContainer.classList.add("hidden"); // Sembunyikan menu
        paymentContainer.classList.remove("hidden"); // Tampilkan pembayaran
    } else {
        paymentContainer.classList.add("hidden"); // Sembunyikan pembayaran
        menuContainer.classList.remove("hidden"); // Tampilkan menu
    }
}
