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

import { IdentityDecor } from "@/components/identity-decor";

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
    <div className="identity-page relative min-h-dvh overflow-clip bg-background text-foreground">
      <div aria-hidden="true" className="identity-backdrop" />
      <IdentityDecor />
      <div className="identity-center relative mx-auto flex min-h-dvh max-w-xl flex-col px-5 py-12 sm:py-20">
        {/* Profile */}
        <header className="animate-rise text-center [animation-delay:60ms]">
          <div className="relative mx-auto size-28">
            <div className="identity-avatar-glow absolute inset-0 rounded-full" />
            <img
              src="/phelosophy.jpg"
              alt="Abd El-Rahman"
              width={112}
              height={112}
              className="relative size-28 rounded-full object-cover outline-1 -outline-offset-1 outline-input"
            />
            <span className="absolute -right-1 bottom-1 grid size-7 place-items-center rounded-full border border-border bg-background/80 font-mono text-[11px] text-accent">
              ♟
            </span>
          </div>
          <h1 className="mt-5 font-display text-[2rem] font-bold leading-tight text-balance">
            Abd El-Rahman
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
            Web developer. Chess player. Cinema addict. Born to build
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 font-mono text-[10px] uppercase text-muted-foreground">
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
            <h2 className="mb-3 px-1 font-mono text-[10px] font-normal uppercase text-muted-foreground">
              {section.label}
            </h2>
            <div className="flex flex-col gap-2.5">
              {section.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="identity-link group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl bg-glass/40 px-4 py-3.5 ring-1 ring-border backdrop-blur-xl transition-colors duration-200 hover:bg-glass/70 hover:ring-accent/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-background/60 ring-1 ring-border">
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
                  <span aria-hidden="true" className="font-mono text-xs text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}

        <footer className="animate-rise mt-10 border-t border-border pt-5 text-center font-mono text-[10px] uppercase text-muted-foreground [animation-delay:600ms]">
        </footer>
      </div>
    </div>
  );
}
