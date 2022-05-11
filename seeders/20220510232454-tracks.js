'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInser('tracks', [
      {
        trackName: 'Where Eagles Dare',
        trackDescription: 'Cover a great Misfits song',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652230404/Where_Eagles_Dare9_tny8pg.mp3',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'Bette Davis Eyes',
        trackDescription: 'Cover a great Kim Carnes song',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652230093/Bette_Davis_Eyes2_cll0ii.mp3',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'Misery Loves Comedy',
        trackDescription:
          'A little tune that goes perfectly with coffee and a rainy day.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652229826/MISERY_LOVES_COMEDY_llx4nz.mp3',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'If These Binoculars could talk',
        trackDescription: 'A fun indie rocker.  Chorus is infectious.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652229787/If_these_binoculars_could_talkV4_hsnell.mp3',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: "I Didn't Make Enough Coffee",
        trackDescription: "For those I need coffee and don't have any days.",
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652229679/I_DIDNT_MAKE_ENOUGH_COFFEE_cbkrgl.mp3',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'Brazil, 1964',
        trackDescription: 'Inspired by Bossa Nova, but similar to Boy Pablo.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652229648/BRAZILV3_tbczhl.mp3',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: "It Get's Worse",
        trackDescription:
          'I tried to right a Zevon sounding tune.  Now I just need someone to right some cynical lyrics.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652229637/SPIRAL_STAIRS4_yqqvep.mp3',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'Adjacent',
        trackDescription:
          'Need somebody to sing like Guy Picciotto on this for me.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652229277/REGURGITATOR3_vubvmg.mp3',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'The Will of the Machine',
        trackDescription:
          'Wrote this as a theme song for a show, but might work with vocals.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652229224/FOREMOTHERS_WILL02_thmwlg.mp3',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: "A Cassette Labeled 'Demo: 1983'",
        trackDescription:
          "You found this cassette stuck in between the seats of your weird Uncle's car.",
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652229075/A_Cassette_Labled_Demo_1983_pe8o1b.mp3',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: "Cyborg's In Space",
        trackDescription: 'This track would have been great 25 years ago.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652229066/Cyborg_Demon_Hunters_in_Space_vfcwec.mp3',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'Vidja Gehms',
        trackDescription: 'This is a little synthy kind of beat.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652228736/Vidja_Gehms_slow_n44vkn.mp3',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'Nice Watch',
        trackDescription: 'This watch was your birthright.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652228468/Nice_watch_MIX03_ycr5qi.mp3',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'Funky Bap',
        trackDescription: 'Might be too funky...said no one ever.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652228058/funkybap_jljpao.mp3',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'Backlog: The Song',
        trackDescription: 'A ripper in the vein of Japandroids.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652227870/Droidz_1_tcnqvk.mp3',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: 'It Could Last Forever',
        trackDescription:
          'I wrote this track inspired by Explosions in the sky.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652227730/BOARDS_EXPLOSIONS_ifxwks.mp3',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trackName: '40 Year Old Teenager',
        trackDescription: 'This is a fun tune that reminds me of 20 years ago.',
        trackAudio:
          'https://res.cloudinary.com/silverbeard/video/upload/v1652029890/40_YEAR_OLD_TEENAGERV2_fzudnz.mp3',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tracks', null, {})
  }
}
