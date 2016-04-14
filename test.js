import execa from 'execa';
import test from 'ava';

test('should return true', async t => {
	t.is((await execa('./cli.js', ['fixtures/optipng'])).stdout, 'true');
});

test('should return exit code 1', async t => {
	t.throws(execa('./cli.js', ['readme.md']));
});
