const language = {
    info: {
        country_code: "IT",
        lang_name: "Italiano"
    },
    site: {
        description: "Visualizza o cerca nella lista sanzioni del network McExp.it."
    },
    words: {
        bans: {
            singular: "Ban",
            plural: "Ban"
        },
        mutes: {
            singular: "Mute",
            plural: "Mute"
        },
        kicks: {
            singular: "Kick",
            plural: "Kick"
        },
        warns: {
            singular: "Warn",
            plural: "Warn"
        },
        yes: "Sì",
        no: "No",
        player: "Giocatore",
        staff: "Staff",
        reason: "Motivo",
        date: "Data",
        expires: "Scadenza",
        originServer: "Server di origine",
        notified: "Notificato",
    },
    pages: {
        home: {
            title: "Home",
            subtitle: "Visualizza o cerca nella lista sanzioni del network McExp.it."
        },
        history: {
            title: "Cronologia",
            subtitle: "Punizioni totali: {total}",
            table: {
                heads: {
                    type: "Tipo",
                    player: "Giocatore",
                    by: "Punito da",
                    reason: "Motivo",
                    date: "Data",
                    expires: "Scadenza"
                },
                permanent: "Punizione permanente",
                expire_not_applicable: "N/A",
                active: {
                    true: "Attivo",
                    temporal: "Temporaneo",
                    false: "Scaduto"
                }
            }
        },
        bans: {
            title: "Ban",
            subtitle: "Numero di ban: {total}",
            table: {
                heads: {
                    player: "Giocatore",
                    by: "Bannato da",
                    reason: "Motivo",
                    date: "Data",
                    expires: "Scadenza"
                },
                permanent: "Ban permanente",
                active: {
                    true: "Attivo",
                    temporal: "Temporaneo",
                    false: "Scaduto"
                }
            },
            info: {
                title: "Ban #{id}",
                badges: {
                    ipban: "IP Ban",
                    active: "Attivo",
                    expired: "Scaduto",
                    permanent: "Permanente",
                }
            }
        },
        mutes: {
            title: "Mute",
            subtitle: "Numero di mute: {total}",
            table: {
                heads: {
                    player: "Giocatore",
                    by: "Mutato da",
                    reason: "Motivo",
                    date: "Data",
                    expires: "Scadenza"
                },
                permanent: "Mute permanente",
                active: {
                    true: "Attivo",
                    temporal: "Temporaneo",
                    false: "Scaduto"
                }
            },
            info: {
                title: "Mute #{id}",
                badges: {
                    ipmute: "IP Mute",
                    active: "Attivo",
                    expired: "Scaduto",
                    permanent: "Permanente",
                }
            }
        },
        warns: {
            title: "Warn",
            subtitle: "Numero di warn: {total}",
            table: {
                heads: {
                    player: "Giocatore",
                    by: "Avvertito da",
                    reason: "Motivo",
                    date: "Data",
                    notified: "Notificato"
                },
            },
            info: {
                title: "Warn #{id}"
            }
        },
        kicks: {
            title: "Kick",
            subtitle: "Numero di kick: {total}",
            table: {
                heads: {
                    player: "Giocatore",
                    by: "Kickato da",
                    reason: "Motivo",
                    date: "Data"
                }
            },
            info: {
                title: "Kick #{id}"
            }
        },
        playerHistory: {
            title: "{player}"
        },
        errors: {
            notFound: {
                title: "404",
                description: "Sembra che ti sia perso. Torna alla pagina principale.",
                button: "Torna alla home"
            }
        }
    },
    pagination: {
        previous: "Precedente",
        next: "Successivo"
    },
    notifications: {
        playerNotFound: {
            title: "Errore",
            description: "Il giocatore non esiste nel database.",
        }
    }
}

module.exports = language;