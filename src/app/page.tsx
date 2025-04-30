"use client"

import { Badge, MiniCart } from "@/components/ui";
import { Button } from "@/components/ui/button/button";
import { ProductCard } from "@/components/ui/product-card/product-card";


export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <Button>Primary Button</Button>
      <Badge>Badge Label</Badge>
      <div className="flex gap-4">
        <ProductCard
          title="Running Shoes"
          price="$79.99"
          imageUrl="https://plus.unsplash.com/premium_photo-1723773743655-71e6b5961089?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Product"
        />
        <MiniCart />
      </div>
    </div>
  );
}
