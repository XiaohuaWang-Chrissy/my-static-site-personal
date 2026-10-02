// Clips 已并入 Writing 页面（HBJ 卡片），旧网址自动跳转过去
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export function load() {
  redirect(308, `${base}/writing`);
}
