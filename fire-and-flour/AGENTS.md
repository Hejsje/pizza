<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared restaurant navigation and footer in SiteShell, and page content in separate TanStack leaf routes so all pages remain directly accessible.
- Keep menu data and leaf metadata helpers in the browser-safe pizzeria module so every page uses the same menu and prices.
- This is a frontend source-code delivery; basket state is session-only and no orders or payments are submitted.
