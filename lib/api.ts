import { Product } from "./types";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(
      "https://api-dev.ziyadbooks.com/api/v1/ecommerce/auth/products/all/category",
      {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();
    console.log("FULL FIRST ITEM:", JSON.stringify(data?.data?.data?.[0] || {}, null, 2));

    const rawProducts = data?.data?.data || data?.data || [];

    if (!Array.isArray(rawProducts) || rawProducts.length === 0) {
      console.log("No valid products array found");
      return [];
    }

    const products: Product[] = rawProducts.slice(0, 12).map((item: any, index: number) => {
      console.log(`Item ${index}:`, {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        hasName: !!item.name,
        hasPrice: !!item.price,
        hasImage: !!item.image
      });
      
      return {
        id: item.id || `p${index}`,
        name: item.name || item.title || item.product_name || `Buku ${index + 1}`,
        price: Number(item.price || item.harga || item.amount || 99999),
        image: item.image || item.images?.[0] || item.image_url || item.thumbnail || `https://via.placeholder.com/400x600/FFB6C1/000?text=Buku+${index + 1}`
      };
    }).filter(product => product.name && product.price > 0);

    console.log("FINAL PRODUCTS:", products.length, products.map(p => ({name: p.name, price: p.price, hasImage: !!p.image})));
    return products;
  } catch (error) {
    console.error("API ERROR:", error);
    return [];
  }
}

