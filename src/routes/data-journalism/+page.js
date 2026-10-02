// 数据新闻已并入 Writing 页面，旧网址自动跳转过去
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export function load() {
  redirect(308, `${base}/writing`);
}
