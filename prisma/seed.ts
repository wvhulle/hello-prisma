#!/usr/bin/env -S node --experimental-specifier-resolution=node --loader ts-node/esm
import pkg from '@prisma/client';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';




import SegfaultHandler from 'segfault-handler';
SegfaultHandler.registerHandler('crash.log');

// import type { OperationType } from "@prisma/client"
const { PrismaClient } = pkg;
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})

// import faker from '@faker-js/faker';

function standardize(s: string): string {
    return s.toUpperCase().trim().replace(/\s/, "_")
}

async function readData(file: string): Promise<any[]> {
    console.log(`reading file ${file}`)
    const __dirname = path.resolve(path.dirname(''));
    const data = fs.readFileSync(__dirname + `/prisma/` + file + `.csv`, "utf8")

    const records = parse(data, {
        columns: true,
        skip_empty_lines: true
    });
    console.table(records)
    return records
}

async function seedProducts() {
    console.log(`Started seedProducts()...`)
    const productData = await readData(`products`)
    for (const row of productData) {
        console.log(`Seeding product ${row.name}`)
        const { name } = row
        const product = await prisma.product.upsert({ where: { name }, create: { name }, update: { name } })
        console.log(`Seeded product ${product.name}`)
    }
}



async function main() {
    console.log(`Started main()...`)
    await seedProducts()
}


main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })