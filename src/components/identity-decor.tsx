import { ArrowUpRight, AudioLines, Bot, Braces, Code2, Film, Gamepad2, Monitor, Sparkles, Workflow } from "lucide-react";

/** Decorative identity cues only: no links, controls, or biographical claims. */
export function IdentityDecor() {
  return (
    <div className="identity-decor" aria-hidden="true">
      <div className="identity-zone identity-zone-build">
        <div className="identity-caption"><span /> THE BUILD SIDE</div>
        <div className="identity-terminal identity-float">
          <div className="identity-terminal-bar"><span /><span /><span /><Code2 size={14} /></div>
          <div className="identity-code"><span className="text-identity-mint">&lt;create&gt;</span><br /><span className="identity-code-indent">ideas → reality</span><br /><span className="text-identity-mint">&lt;/create&gt;</span></div>
          <div className="identity-terminal-footer"><span className="identity-status" /> BUILD / CREATE</div>
        </div>
        <div className="identity-code-mark"><Braces size={38} strokeWidth={1} /><span>from a blank canvas.</span></div>
        <div className="identity-automation identity-float identity-float-delayed">
          <div className="identity-small-title"><Workflow size={16} /><span>AUTOMATE</span><ArrowUpRight size={13} /></div>
          <div className="identity-flow"><Code2 size={18} /><span /><Bot size={21} /><span /><Sparkles size={18} /></div>
          <div className="identity-tags"><span>WEB</span><span>AI</span><span>IDEAS</span></div>
        </div>
        <div className="identity-signature"><span className="identity-signature-line" /> BORN TO BUILD</div>
      </div>
      <div className="identity-zone identity-zone-play">
        <div className="identity-caption"><span /> THE OTHER SIDE</div>
        <div className="identity-setup identity-float identity-float-delayed">
          <div className="identity-small-title"><Monitor size={16} /><span>OFF THE CLOCK</span></div>
          <div className="identity-monitor"><div className="identity-crosshair" /><Gamepad2 size={37} strokeWidth={1.2} /><span>PLAY.</span></div>
          <div className="identity-monitor-neck" /><div className="identity-monitor-foot" />
          <div className="identity-setup-footer"><span>PC / VALORANT</span><span>↗</span></div>
        </div>
        <div className="identity-personal-mark"><span>different worlds.<br />same curiosity.</span><Sparkles size={25} strokeWidth={1} /></div>
        <div className="identity-culture identity-float">
          <div className="identity-culture-row"><AudioLines size={23} strokeWidth={1.4} /><div><span>MUSIC</span><div className="identity-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div></div>
          <div className="identity-culture-row"><Film size={23} strokeWidth={1.4} /><div><span>CINEMA</span><div className="identity-filmstrip"><i /><i /><i /></div></div></div>
        </div>
        <div className="identity-side-note">CODE · PLAY · REPEAT</div>
      </div>
    </div>
  );
}