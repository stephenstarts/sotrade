# Svelte Starter Kit
<img src="./static/svelte-starter-kit.png" title="Svelte Starter Kit" />
Boilerplate to quckly get up and running with Svelte, with

- __Typescript__ as the language choice
- __Tailwind CSS__ for quick styling without getting out of your HTML
- __ESLint__ for static code analysis
- __Prettier__ for code formatting
- __SEO__ pre-configured
- __Icons__ support out of the box
- __Authentication__ with Supabase GoTrue
- __User Profiles__ With Supabase PostgREST
- __User Avatar__ with Supbase Storage

and pre-made
- __Alerts__ `coz who don't uses one?
- __Modal__ as you always come back to `em
- __Menu__

## How to Setup?
If new to Supabase
- Create account at [Supabase](https://app.supabase.io/)
- Create a Organisation, and a project

Once done, or if you already have a Supabase project
- Copy the generated project's API authentication details from `https://app.supabase.io/project/<your-awesome-svelte-project>/api/default?page=auth`
- Place the details in `.env`/`.env.local` as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`</li>
- Install NPM dependencies

Svelte Start Kit supports profile and user avatars now. To get the profile table and storage ready, execute the following query at `https://app.supabase.io/project/<your-awesome-svelte-project>/editor/sql`

```sql
-- Create a table for Public Profiles
create table profiles (
  id uuid references auth.users not null,
  username text unique,
  avatar_url text,
  website text,
  updated_at timestamp with time zone,

  primary key (id),
  unique(username),
  constraint username_length check (char_length(username) >= 3)
);

alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Set up Storage!
insert into storage.buckets (id, name)
values ('avatars', 'avatars');

create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'avatars' );

create policy "Anyone can upload an avatar."
  on storage.objects for insert
  with check ( bucket_id = 'avatars' );
```

`profiles` table's chnages are not observed in real-time due to performance reasons. If needed, execute the following query
```sql
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
commit;
alter publication supabase_realtime add table profiles;
```


and get started by running `yarn dev`

## Why SvelteKit?

Landing from a different Full-stack UI framework(Next.js, NuxtJS, Angular Universal)? Here's few essential watches and readings -
- [An update on SvelteKit](https://www.youtube.com/watch?v=fnr9XWvjJHw&t=19101s) (Rich Harris on SvelteKit - SvelteSummit)
- [A short history of Svelte](https://dev.to/ajcwebdev/a-short-history-of-sveltekit-49lk)

## Why Supabase?
- https://aalam.in/blog/supabase-the-open-source-firebase-alternative (Supabase has storage now, and something better than functions could land anytime soon)

## Building

Svelte Kit apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `yarn build` will generate a Node app that you can run with `node build`. To use a different adapter, add it to the `devDependencies` in `package.json` making sure to specify the version as `next` and update your `svelte.config.cjs` to [specify your chosen adapter](https://kit.svelte.dev/docs#configuration-adapter). The following official adapters are available:

- [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/master/packages/adapter-node)
- [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
- [@sveltejs/adapter-netlify](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)
- [@sveltejs/adapter-vercel](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel)
- ...more soon

[See the adapter documentation for more detail](https://kit.svelte.dev/docs#adapters)
