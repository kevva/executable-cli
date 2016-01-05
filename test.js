import execa from 'execa';
import test from 'ava';

test('should return true', async t => {
	const exec = await execa('./cli.js', ['fixtures/optipng']);
	t.is(exec.stdout, 'true');
});

test('should return exit code 1', async t => {
	try {
		await execa('./cli.js', ['readme.md']);
		t.fail();
	} catch (err) {
		t.is(err.code, 1);
	}
});
