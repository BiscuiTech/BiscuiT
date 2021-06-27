<script>
	export let post;
</script>

<div>
	<h2>'latestBlog'</h2>
	<!-- {post && Object.keys(post).length > 0 ? (
    <ListItem post={post} />
  ) : (
    <em>{t('common')['error_noBlogs']}</em>
  )} -->
</div>

<style>
	div {
		margin-top: 60px;
		overflow: auto;
		background: hsl(200, 100%, 4.5%);
		padding: 0.6em 1em;
	}
</style>
