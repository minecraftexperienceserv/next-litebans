export const siteConfig = {
  title: "McExp.it Sanzioni",
  logo: "/logo.webp",
  favicon: "/logo.webp",
  languages: {
    available: [
      "it",
      "en",
    ],
    default: "it",
  },
  console: {
    name: "Console", // Just for filter badge
    uuid: "[Console]", // Use for filter url and to check if a punishment is made from the Console. In some versions of Litebans, the console uuid is "CONSOLE".
    icon: "/console.webp",
    body: "/console-body.webp",
    bust: "/console-bust.webp",
  },
  defaultPlayerLookup: "_Tbenatti_",
  // When enabled, body and bust images will show a steve skin
  bedrock: {
    enabled: false,
    prefix: "BP_",
  },
  openGraph: {
    dateFormat: "dd-MM-yyyy hh:mm:ss",
    pages: {
      main: {
        // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
    Visualizza o cerca nella lista sanzioni del network McExp.it.

    Sanzioni totali: {total}

      🚫 Bans: {bans}
      🔇 Mutes: {mutes}
      ⚠️ Warns: {warns}
      ❌ Kicks: {kicks}
  `
      },
      history: {
        // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
    Sanzioni totali: {total}

      🚫 Bans: {bans}
      🔇 Mutes: {mutes}
      ⚠️ Warns: {warns}
      ❌ Kicks: {kicks}
  `
      },
      player: {
        // Placeholders: {name}, {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
    Sanzioni di {name}.

    Sanzioni totali: {total}

      🚫 Bans: {bans}
      🔇 Mutes: {mutes}
      ⚠️ Warns: {warns}
      ❌ Kicks: {kicks}
  `,
        bans: {
          description: `
      Bans di {name}.

      Bans totali: {total}
    `,
        },
        mutes: {
          description: `
      Mutes di {name}.

      Mutes totali: {total}
    `,
        },
        warns: {
          description: `
      Warns di {name}.

      Warns totali: {total}
    `,
        },
        kicks: {
          description: `
      Kicks di {name}.

      Kicks totali: {total}
    `,
        },
      },
      bans: {
        // Placeholders: {total}
        description: "Bans totali: {total}"
      },
      mutes: {
        // Placeholders: {total}
        description: "Mutes totali: {total}"
      },
      warns: {
        // Placeholders: {total}
        description: "Warns totali: {total}"
      },
      kicks: {
        // Placeholders: {total}
        description: "Kicks totali: {total}"
      },
      punishments: {
        ban: {
          // Placeholders: {name}, {staff}, {reason}, {time}, {duration}, {server}
          description: `
      👤 Utente: {name}
      👮 Staff: {staff}

      📜 Motivo: {reason}
      🕒 Data: {time}
      ⌛ Durata: {duration}
    `
        },
        mute: {
          // Placeholders: {name}, {staff}, {reason}, {time}, {duration}, {server}
          description: `
      👤 Utente: {name}
      👮 Staff: {staff}

      📜 Motivo: {reason}
      🕒 Data: {time}
      ⌛ Durata: {duration}
    `
        },
        warn: {
          // Placeholders: {name}, {staff}, {reason}, {time}, {server}
          description: `
      👤 Utente: {name}
      👮 Staff: {staff}

      📜 Motivo: {reason}
      🕒 Data: {time}
    `
        },
        kick: {
          // Placeholders: {name}, {staff}, {reason}, {time}, {server}
          description: `
      👤 Utente: {name}
      👮 Staff: {staff}

      📜 Motivo: {reason}
      🕒 Data: {time}
    `
        }
      }
    }
  }
}
export type SiteConfig = typeof siteConfig;