const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const toast = (message) => { const el = $('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer = setTimeout(() => el.classList.remove('show'), 2300); };

$$('[data-toast]').forEach((card) => card.addEventListener('click', () => toast(card.dataset.toast)));
$$('[data-section]').forEach((item) => item.addEventListener('click', () => { $$('.nav-item').forEach(n => n.classList.remove('active')); const target = item.dataset.section; const nav = $(`.nav-item[data-section="${target}"]`); if (nav) nav.classList.add('active'); const titles = { overview: '今日总览', parcel: '快递中心', courses: '课程助手', requests: '事务申请', activity: '校园活动' }; $('#pageTitle').textContent = titles[target] || '今日总览'; toast(`已切换至${titles[target] || '今日总览'}`); }));

$$('.task-row input').forEach(input => input.addEventListener('change', (e) => { e.target.closest('.task-row').classList.toggle('checked', e.target.checked); updateCount(); }));
function updateCount(){ $('#taskCount').textContent = $$('.task-row input:not(:checked)').length; }
$('#clearDone').addEventListener('click', () => { $$('.task-row input:checked').forEach(input => input.closest('.task-row').remove()); updateCount(); toast('已清除完成事项'); });
$('#addTask').addEventListener('click', () => { const text = prompt('输入新的待办事项'); if(!text?.trim()) return; const row = document.createElement('label'); row.className = 'task-row'; row.innerHTML = `<input type="checkbox"><span class="checkmark"></span><span class="task-text">${text.trim()}</span><small>新建</small>`; $('#taskList').appendChild(row); row.querySelector('input').addEventListener('change', (e) => { e.target.closest('.task-row').classList.toggle('checked', e.target.checked); updateCount(); }); updateCount(); toast('待办已添加'); });

const modal = $('#searchModal'); $('#searchBtn').addEventListener('click', () => { modal.classList.add('open'); $('#searchInput').focus(); }); $('#closeSearch').addEventListener('click', () => modal.classList.remove('open')); modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });
$('#searchInput').addEventListener('input', (e) => { const q = e.target.value.trim(); $('#searchResult').textContent = q ? `为你找到与“${q}”相关的 3 个入口` : ''; }); $$('.search-hints button').forEach(b => b.addEventListener('click', () => { $('#searchInput').value = b.textContent; $('#searchInput').dispatchEvent(new Event('input')); }));
$('#allServices').addEventListener('click', () => toast('更多服务正在整理中，先试试上方快捷入口')); $('#learnMore').addEventListener('click', () => toast('Campus Hub：让校园事务更有秩序')); updateCount();
