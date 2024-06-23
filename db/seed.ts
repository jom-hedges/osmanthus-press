import { db, Email } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Email).values([
		{ email: 'osmanthuspress@gmail.com' },
		{ email: 'test@osmanthus.tv' }
	])
}
