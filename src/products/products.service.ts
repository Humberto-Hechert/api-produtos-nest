import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    findAll() {
        return this.productRepository.find();
    }

    findOne(id: number) {
        return this.productRepository.findOneBy({ id });
    }

    create(product: Partial<Product>) {
        const newProduct = this.productRepository.create(product);
        return this.productRepository.save(newProduct)
    }

    async update(id: number, product: Partial<Product>) {
        await this.productRepository.update(id, product);
        return this.findOne(id);
    }

    delete(id: number) {
        return this.productRepository.delete(id);
    }
}
