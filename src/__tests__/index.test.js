import discord from '../index';

test('has correct properties', () => {
  expect(discord).toHaveProperty('icons');
  expect(discord).toHaveProperty('toSvg');
  expect(discord).toHaveProperty('replace');
});
