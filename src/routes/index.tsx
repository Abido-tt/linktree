import { createFileRoute } from "@tanstack/react-router";
import {
  siSpotify,
  siSnapchat,
  siFacebook,
  siInstagram,
  siTiktok,
  siChessdotcom,
  siSteam,
  siLetterboxd,
  siDiscord,
  siGithub,
} from "simple-icons";

import avatar from "@/assets/avatar.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abd El-Rahman — Links" },
      {
        name: "description",
        content:
          "All of Abd El-Rahman's links in one place — code, chess, films, music and games.",
      },
      { property: "og:title", content: "Abd El-Rahman — Links" },
      {
        property: "og:description",
        content:
          "All of Abd El-Rahman's links in one place — code, chess, films, music and games.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

type BrandIcon = { path: string; hex: string };

function BrandMark({ icon, name, className }: { icon: BrandIcon; name: string; className?: string }) {
  if (name === "GitHub") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} text-accent`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 7-5 5 5 5m10-10 5 5-5 5m-3-14-4 18" /></svg>;
  }
  if (name === "Letterboxd") {
    return <svg viewBox="0 0 30 20" aria-hidden="true" className={className}><circle cx="8" cy="10" r="7" className="fill-letterboxd-orange" /><circle cx="15" cy="10" r="7" className="fill-letterboxd-green" /><circle cx="22" cy="10" r="7" className="fill-letterboxd-blue" /><path d="M11.5 3.94a7 7 0 0 1 0 12.12 7 7 0 0 1 0-12.12M18.5 3.94a7 7 0 0 1 0 12.12 7 7 0 0 1 0-12.12" className="fill-logo-light" /></svg>;
  }
  if (name === "TikTok") {
    return <svg viewBox="-2 -2 28 28" aria-hidden="true" className={className}><path d={icon.path} transform="translate(-.8 -.5)" className="fill-tiktok-cyan" /><path d={icon.path} transform="translate(.8 .5)" className="fill-tiktok-red" /><path d={icon.path} className="fill-logo-light" /></svg>;
  }
  if (name === "Steam") {
    return <svg viewBox="0 0 28 28" aria-hidden="true" className={className}><circle cx="14" cy="14" r="14" className="fill-steam-blue" /><path d={icon.path} transform="translate(2 2)" className="fill-logo-light" /></svg>;
  }
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className={className}
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}

type LinkItem = {
  name: string;
  note: string;
  url: string;
  icon: BrandIcon;
};

type Section = {
  label: string;
  delay: number;
  links: LinkItem[];
};

export const SECTIONS: Section[] = [
  {
    label: "01 — Build",
    delay: 200,
    links: [
      { name: "GitHub", note: "Code, repos, experiments", url: "https://github.com/Abido-tt", icon: siGithub },
      { name: "Steam", note: "Library, achievements", url: "https://s.team/p/jtrw-bfkn/KDNVNTHJ", icon: siSteam },
    ],
  },
  {
    label: "02 — Play",
    delay: 300,
    links: [
      { name: "Chess.com", note: "+700 Rabid Rating", url: "https://www.chess.com/member/Abidott", icon: siChessdotcom },
    ],
  },
  {
    label: "03 — Watch",
    delay: 400,
    links: [
      { name: "Letterboxd", note: "Films watched", url: "https://boxd.it/dOTTD", icon: siLetterboxd },
      { name: "Spotify", note: "Playlists, listening", url: "https://open.spotify.com/user/31m36cont2a7s346sfncsxmmoexu", icon: siSpotify },
    ],
  },
  {
    label: "04 — Communication",
    delay: 500,
    links: [
      { name: "Instagram", note: "Daily, stories", url: "https://www.instagram.com/3ooo_tt", icon: siInstagram },
      { name: "TikTok", note: "Short clips", url: "https://www.tiktok.com/@www.iamfuckingcrazy.com?_r=1", icon: siTiktok },
      { name: "Snapchat", note: "Snaps", url: "https://www.snapchat.com/add/tt_3ooo?share_id=vMtMKiyDPaY&locale=en-EG", icon: siSnapchat },
      { name: "Facebook", note: "Profile", url: "https://www.facebook.com/share/1Bst3kRjYP/", icon: siFacebook },
      { name: "Discord", note: "communities", url: "https://discord.gg/xera6cWP", icon: siDiscord },
    ],
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 size-[420px] rounded-full bg-sky-400/20 blur-[110px] animate-drift" />
        <div className="absolute -right-28 top-1/3 size-[460px] rounded-full bg-indigo-500/20 blur-[120px] animate-drift [animation-delay:-6s]" />
        <div className="absolute -bottom-32 left-1/4 size-[380px] rounded-full bg-cyan-300/15 blur-[110px] animate-drift [animation-delay:-11s]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_35%,var(--color-background)_100%)]" />
      </div>

      <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5 py-16">
        {/* Profile */}
        <header className="animate-rise text-center [animation-delay:60ms]">
          <div className="relative mx-auto size-28">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/50 via-indigo-400/30 to-transparent blur-md" />
            <img
              src={avatar.url}
              alt="Abd El-Rahman"
              width={112}
              height={112}
              className="relative size-28 rounded-full object-cover outline-1 -outline-offset-1 outline-white/15"
            />
            <span className="absolute -right-1 bottom-1 grid size-7 place-items-center rounded-full border border-white/10 bg-background/80 font-mono text-[11px] text-accent">
              ♟
            </span>
          </div>
          <h1 className="mt-5 font-display text-[2rem] font-bold leading-none tracking-tight text-balance">
            Abd El-Rahman
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
            Web developer. Chess player. Cinema addict. Born to build
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-accent">●</span>
            <span>3OOO</span>
            <span className="opacity-30"></span>
            <span></span>
          </div>
        </header>

        {/* Link sections */}
        {SECTIONS.map((section) => (
          <section
            key={section.label}
            className="animate-rise mt-9"
            style={{ animationDelay: `${section.delay}ms` }}
          >
            <p className="mb-3 px-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {section.label}
            </p>
            <div className="flex flex-col gap-2.5">
              {section.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl bg-glass/40 px-3 py-3 ring-1 ring-white/10 backdrop-blur-xl transition-colors duration-200 hover:bg-glass/70 hover:ring-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-background/60 ring-1 ring-white/10">
                    <BrandMark icon={link.icon} name={link.name} className="size-4.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {link.name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {link.note}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}

        <footer className="animate-rise mt-10 border-t border-white/5 pt-5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground [animation-delay:600ms]">
        </footer>
      </main>
    </div>
  );
}
