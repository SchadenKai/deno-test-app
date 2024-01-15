import { assertEquals } from './deps.ts';
import { addSum, createQrCode } from './app.ts';

Deno.test("Testing the qr code functionanlity", async () => {
    await assertEquals(await createQrCode(), true)
})
Deno.test("Testing sum", () => {
    assertEquals(addSum(1,3), 4)
})