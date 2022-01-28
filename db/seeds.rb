# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"
User.delete_all

user1 = User.create({username: 'Demo User', password: 'demmo usser'})
pfp1 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/00_profile_pic/pfp1.jpg')
user1.photo.attach(io: pfp1, filename: 'pfp1.jpg')

user2 = User.create({username: 'user2', password:'123456'})
pfp2 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/00_profile_pic/pfp2.jpg')
user2.photo.attach(io: pfp2, filename: 'pfp2.jpg')

user3 = User.create({username: 'user3', password:'123456'})
pfp3 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/00_profile_pic/pfp6.jpg')
user3.photo.attach(io: pfp3, filename: 'pfp3.jpg')

user4 = User.create({username: 'user4', password:'123456'})
pfp4 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/00_profile_pic/pfp4.jpg')
user4.photo.attach(io: pfp4, filename: 'pfp4.jpg')

user5 = User.create({username: 'user5', password:'123456'})
pfp5 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/00_profile_pic/pfp5.jpg')
user5.photo.attach(io: pfp5, filename: 'pfp5.jpg')

mhw = Game.create({
  title: 'Monster Hunter: World',
  price: 29.99,
  genre_1: 'action',
  genre_2: 'multiplayer',
  short_about: "Welcome to a new world! In Monster Hunter: World, the \
  latest installment in the series, you can enjoy the ultimate hunting \
  experience, using everything at your disposal to hunt monsters in a new \
  world teeming with surprises and excitement.",
  extended_about: "Welcome to a new world! Take on the role of a hunter \
  and slay ferocious monsters in a living, breathing ecosystem where you \
  can use the landscape and its diverse inhabitants to get the upper hand. \
  Hunt alone or in co-op with up to three other players, and use materials \
  collected from fallen foes to craft new gear and take on even bigger, \
  badder beasts!"
})

mhw_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhw/mhw_feature.jpg')
mhw.feature.attach(io: mhw_feature, filename: 'mhw_feature.jpg')

mhw_header = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhw/mhw_header.jpg')
mhw.header.attach(io: mhw_header, filename: 'mhw_header.jpg')

mhw_1 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhw/mhw_1.jpg')
mhw.photos.attach(io: mhw_1, filename: 'mhw_1.jpg')

mhw_2 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhw/mhw_2.jpg')
mhw.photos.attach(io: mhw_2, filename: 'mhw_2.jpg')

mhw_3 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhw/mhw_3.jpg')
mhw.photos.attach(io: mhw_3, filename: 'mhw_3.jpg')

mhw_4 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhw/mhw_4.jpg')
mhw.photos.attach(io: mhw_4, filename: 'mhw_4.jpg')

mhw_5 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhw/mhw_5.jpg')
mhw.photos.attach(io: mhw_5, filename: 'mhw_5.jpg')


tf2 = Game.create({
  title: 'Team Fortress 2',
  price: 0,
  genre_1: 'hero-shooter',
  genre_2: 'multiplayer',
  short_about: "Nine distinct classes provide a broad range of tactical \
  abilities and personalities. Constantly updated with new game modes, \
  maps, equipment and, most importantly, hats!",
  extended_about: "One of the most popular online action games of all time, \
  Team Fortress 2 delivers constant free updates—new game modes, \
  maps, equipment and, most importantly, hats. Nine distinct classes \
  provide a broad range of tactical abilities and personalities, \
  and lend themselves to a variety of player skills. 
  No matter what your style and experience, we’ve got a character \
  for you. Detailed training and offline practice modes will help \
  you hone your skills before jumping into one of TF2’s many game \
  modes, including Capture the Flag, Control Point, Payload, Arena, \
  King of the Hill and more."
})

temp_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/placeholder.jpg')
tf2.feature.attach(io: temp_feature, filename: 'temp_feature.jpg')


tf2_header = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/tf2/tf2_header.jpg')
tf2.header.attach(io: tf2_header, filename: 'tf2_header.jpg')

tf2_1 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/tf2/tf2_1.jpg')
tf2.photos.attach(io: tf2_1, filename: 'tf2_1.jpg')

tf2_2 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/tf2/tf2_2.jpg')
tf2.photos.attach(io: tf2_2, filename: 'tf2_2.jpg')

tf2_3 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/tf2/tf2_3.jpg')
tf2.photos.attach(io: tf2_3, filename: 'tf2_3.jpg')

tf2_4 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/tf2/tf2_4.jpg')
tf2.photos.attach(io: tf2_4, filename: 'tf2_4.jpg')

sd = Game.create({
  title: "Sleeping Dogs: Definitive Edition",
  price: 19.99,
  genre_1: "open-world",
  genre_2: "action",
  short_about: "The Definitive Edition of the critically acclaimed, \
  award winning open-world action adventure, reworked, rebuilt and \
  re-mastered for the new generation. With all previously available \
  DLC included and a wealth of tech and visual improvements, Hong \
  Kong has never felt so alive.",
  extended_about: "The Definitive Edition of the critically acclaimed, \
  award winning open-world action adventure, reworked, rebuilt and \
  re-mastered for the new generation. All 24 previously available \
  DLC extensions have been integrated into the game, including the \
  story-extending episode Year of the Snake and the horror-themed \
  Nightmare in North Point. Alongside a wealth of new technological, \
  audio and visual improvements, Hong Kong has never felt so alive.
  A vibrant, neon city teaming with life, Hong Kong's exotic locations \
  and busy streets and markets hide one of the most powerful and dangerous \
  criminal organizations in the world: the notorious Triads. Play as Wei \
  Shen - the highly skilled undercover cop trying to take down the Triads \
  from the inside out. You'll have to prove yourself worthy as you fight \
  your way up the organization, taking part in brutal criminal activities \
  without blowing your cover.
  Destroy your opponents in brutal hand-to-hand combat using an unmatched \
  martial arts system. Dominate Hong Kong's buzzing streets in thrilling \
  illegal street races and tear it up in explosive firearms action. Sleeping \
  Dogs' Hong Kong is the ultimate playground."
})

temp_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/placeholder.jpg')
sd.feature.attach(io: temp_feature, filename: 'temp_feature.jpg')

sd_header = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sd/sd_header.jpg')
sd.header.attach(io: sd_header, filename: 'sd_header.jpg')
sd_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sd/sd_1.jpg')
sd.photos.attach(io: sd_1, filename: 'sd_1.jpg')
sd_2 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sd/sd_2.jpg')
sd.photos.attach(io: sd_2, filename: 'sd_2.jpg')
sd_3 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sd/sd_3.jpg')
sd.photos.attach(io: sd_3, filename: 'sd_3.jpg')
sd_4 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sd/sd_4.jpg')
sd.photos.attach(io: sd_4, filename: 'sd_4.jpg')
sd_5 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sd/sd_5.jpg')
sd.photos.attach(io: sd_5, filename: 'sd_5.jpg')


hk = Game.create({
  title: "Hollow Knight",
  price: 14.99,
  genre_1: "metroidvania",
  genre_2: "souls-like",
  short_about: "Forge your own path in Hollow Knight! An epic action adventure \
  through a vast ruined kingdom of insects and heroes. Explore twisting \
  caverns, battle tainted creatures and befriend bizarre bugs, all in a \
  classic, hand-drawn 2D style.",
  extended_about: "Beneath the fading town of Dirtmouth sleeps an ancient, \
  ruined kingdom. Many are drawn below the surface, searching for riches, or \
  glory, or answers to old secrets.
  Hollow Knight is a classically styled 2D action adventure across a vast \
  interconnected world. Explore twisting caverns, ancient cities and deadly \
  wastes; battle tainted creatures and befriend bizarre bugs; and solve ancient \
  mysteries at the kingdom's heart."
})

hk_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/hk/hk_feature.jpg')
hk.feature.attach(io: hk_feature, filename: 'hk_feature.jpg')

hk_header = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/hk/hk_header.jpg')
hk.header.attach(io: hk_header, filename: 'hk_header.jpg')

hk_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/hk/hk_1.jpg')
hk.photos.attach(io: hk_1, filename: 'hk_1.jpg')

hk_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/hk/hk_2.jpg')
hk.photos.attach(io: hk_2, filename: 'hk_2.jpg')

hk_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/hk/hk_3.jpg')
hk.photos.attach(io: hk_3, filename: 'hk_3.jpg')

hk_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/hk/hk_4.jpg')
hk.photos.attach(io: hk_4, filename: 'hk_4.jpg')

hk_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/hk/hk_5.jpg')
hk.photos.attach(io: hk_5, filename: 'hk_5.jpg')

p4g = Game.create({
  title: "Persona 4 Golden",
  price: 19.99,
  genre_1: "JRPG",
  genre_2: "story-rich",
  short_about: "A coming of age story that sets the protagonist and his \
  friends on a journey kickstarted by a chain of serial murders.",
  extended_about: "Inaba—a quiet town in rural Japan sets the scene for \
  budding adolescence in Persona 4 Golden.
  A coming of age story that sets the protagonist and his friends on a \
  journey kickstarted by a chain of serial murders. Explore meeting kindred \
  spirits, feelings of belonging, and even confronting the darker sides of \
  one's self.
  Persona 4 Golden promises meaningful bonds and experiences shared together with friends."
})

temp_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/placeholder.jpg')
p4g.feature.attach(io: temp_feature, filename: 'temp_feature.jpg')

p4g_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/p4g/p4g_header.jpg')
p4g.header.attach(io: p4g_header, filename: 'p4g_header.jpg')

p4g_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/p4g/p4g_1.jpg')
p4g.photos.attach(io: p4g_1, filename: 'p4g_1.jpg')

p4g_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/p4g/p4g_2.jpg')
p4g.photos.attach(io: p4g_2, filename: 'p4g_2.jpg')

p4g_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/p4g/p4g_3.jpg')
p4g.photos.attach(io: p4g_3, filename: 'p4g_3.jpg')

p4g_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/p4g/p4g_4.jpg')
p4g.photos.attach(io: p4g_4, filename: 'p4g_4.jpg')

p4g_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/p4g/p4g_5.jpg')
p4g.photos.attach(io: p4g_5, filename: 'p4g_5.jpg')


y0 = Game.create({
  title: "Yakuza 0",
  price: 19.99,
  genre_1: "action",
  genre_2: "story-rich",
  short_about: "SEGA's legendary Japanese series finally comes to PC. \
  Fight like hell through Tokyo and Osaka as junior yakuza Kiryu and Majima. \
  Take a front row seat to 1980s life in Japan in an experience unlike \
  anything else in video gaming, with uncapped framerates and 4K resolutions. \
  A legend is born.",
  extended_about: "The glitz, glamour, and unbridled decadence of the 80s are back in Yakuza 0.
  Fight like hell through Tokyo and Osaka with protagonist Kazuma Kiryu and \
  series regular Goro Majima. Play as Kazuma Kiryu and discover how he finds \
  himself in a world of trouble when a simple debt collection goes wrong and \
  his mark winds up murdered. Then, step into the silver-toed shoes of Goro \
  Majima and explore his “normal” life as the proprietor of a cabaret club.
  Fighting is not the only way to kill time in 1988's Japan: from discos \
  and hostess clubs to classic SEGA arcades, there are tons of distractions \
  to pursue in the richly detailed, neon-lit world."
})

y0_feature= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/y0/y0_feature.jpg')
y0.feature.attach(io: y0_feature, filename: 'y0_feature.jpg')

y0_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/y0/y0_header.jpg')
y0.header.attach(io: y0_header, filename: 'y0_header.jpg')

y0_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/y0/y0_1.jpg')
y0.photos.attach(io: y0_1, filename: 'y0_1.jpg')

y0_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/y0/y0_2.jpg')
y0.photos.attach(io: y0_2, filename: 'y0_2.jpg')

y0_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/y0/y0_3.jpg')
y0.photos.attach(io: y0_3, filename: 'y0_3.jpg')

y0_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/y0/y0_4.jpg')
y0.photos.attach(io: y0_4, filename: 'y0_4.jpg')

y0_5 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/y0/y0_5.jpg')
y0.photos.attach(io: y0_5, filename: 'y0_5.jpg')

gris = Game.create({
  title: "GRIS",
  price: 16.99,
  genre_1: "beautiful",
  genre_2: "atmospheric",
  short_about: "Gris is a hopeful young girl lost in her own world, dealing \
  with a painful experience in her life. Her journey through sorrow is \
  manifested in her dress, which grants new abilities to better navigate \
  her faded reality.",
  extended_about: "Gris is a hopeful young girl lost in her own world, \
  dealing with a painful experience in her life. Her journey through \
  sorrow is manifested in her dress, which grants new abilities to better \
  navigate her faded reality. As the story unfolds, Gris will grow emotionally \
  and see her world in a different way, revealing new paths to explore using \
  her new abilities.
  GRIS is a serene and evocative experience, free of danger, frustration \
  or death. Players will explore a meticulously designed world brought to \
  life with delicate art, detailed animation, and an elegant original score. \
  Through the game light puzzles, platforming sequences, and optional \
  skill-based challenges will reveal themselves as more of Gris's world \
  becomes accessible."
})

gris_feature= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/gris/gris_feature.jpg')
gris.feature.attach(io: gris_feature, filename: 'gris_feature.jpg')

gris_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/gris/gris_header.jpg')
gris.header.attach(io: gris_header, filename: 'gris_header.jpg')

gris_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/gris/gris_1.jpg')
gris.photos.attach(io: gris_1, filename: 'gris_1.jpg')

gris_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/gris/gris_2.jpg')
gris.photos.attach(io: gris_2, filename: 'gris_2.jpg')

gris_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/gris/gris_3.jpg')
gris.photos.attach(io: gris_3, filename: 'gris_3.jpg')

gris_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/gris/gris_4.jpg')
gris.photos.attach(io: gris_4, filename: 'gris_4.jpg')

gris_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/gris/gris_5.jpg')
gris.photos.attach(io: gris_5, filename: 'gris_5.jpg')

mgrr = Game.create({
  title: "METAL GEAR RISING: REVENGEANCE",
  price: 29.99,
  genre_1: "action",
  genre_2: "hack-and-slash",
  short_about: "PlatinumGames, METAL GEAR RISING: REVENGEANCE takes the \
  renowned METAL GEAR franchise into exciting new territory with an all-new \
  action experience.",
  extended_about: "Developed by Kojima Productions and PlatinumGames, \
  METAL GEAR RISING: REVENGEANCE takes the renowned METAL GEAR franchise \
  into exciting new territory with an all-new action experience. The game \
  seamlessly melds pure action and epic story-telling that surrounds Raiden -\
  a child soldier transformed into a half-human, half-cyborg ninja who uses \
  his High Frequency katana blade to cut through any thing that stands in \
  his vengeful path!
  A huge success on both Xbox 360® and PlayStation®3, METAL GEAR RISING: \
  REVENGEANCE comes to PC with all the famed moves and action running within \
  a beautifully-realised HD environment."
})

temp_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/placeholder.jpg')
mgrr.feature.attach(io: temp_feature, filename: 'temp_feature.jpg')

mgrr_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mgrr/mgrr_header.jpg')
mgrr.header.attach(io: mgrr_header, filename: 'mgrr_header.jpg')

mgrr_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mgrr/mgrr_1.jpg')
mgrr.photos.attach(io: mgrr_1, filename: 'mgrr_1.jpg')

mgrr_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mgrr/mgrr_2.jpg')
mgrr.photos.attach(io: mgrr_2, filename: 'mgrr_2.jpg')

mgrr_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mgrr/mgrr_3.jpg')
mgrr.photos.attach(io: mgrr_3, filename: 'mgrr_3.jpg')

mgrr_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mgrr/mgrr_4.jpg')
mgrr.photos.attach(io: mgrr_4, filename: 'mgrr_4.jpg')

mgrr_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mgrr/mgrr_5.jpg')
mgrr.photos.attach(io: mgrr_5, filename: 'mgrr_5.jpg')


furi = Game.create({
  title: "Furi",
  price: 19.99,
  genre_1: "action",
  genre_2: "difficult",
  short_about: "The jailer is the key, kill him and you'll be free.",
  extended_about: "You were captured. Look what they've done to you… The jailer \
  is the key, kill him and you'll be free.
  Fight your way free in this ultra-responsive, fast-paced sword fighting and \
  dual-stick shooting game.
  Boss design by Takashi Okazaki. Original soundtrack by Carpenter Brut, Danger, \
  The Toxic Avenger, Lorn, Scattle, Waveshaper and Kn1ght!"
})

furi_feature= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/furi/furi_feature.jpg')
furi.feature.attach(io: furi_feature, filename: 'furi_feature.jpg')

furi_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/furi/furi_header.jpg')
furi.header.attach(io: furi_header, filename: 'furi_header.jpg')

furi_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/furi/furi_1.jpg')
furi.photos.attach(io: furi_1, filename: 'furi_1.jpg')

furi_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/furi/furi_2.jpg')
furi.photos.attach(io: furi_2, filename: 'furi_2.jpg')

furi_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/furi/furi_3.jpg')
furi.photos.attach(io: furi_3, filename: 'furi_3.jpg')

furi_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/furi/furi_4.jpg')
furi.photos.attach(io: furi_4, filename: 'furi_4.jpg')

furi_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/furi/furi_5.jpg')
furi.photos.attach(io: furi_5, filename: 'furi_5.jpg')

dc = Game.create({
  title: "Dead Cells",
  price: 24.99,
  genre_1: "roguelite",
  genre_2: "pixel-graphics",
  short_about: "Dead Cells is a rogue-lite, metroidvania inspired, \
  action-platformer. You'll explore a sprawling, ever-changing castle... \
  assuming you're able to fight your way past its keepers in 2D souls-lite \
  combat. No checkpoints. Kill, die, learn, repeat.",
  extended_about: "You grew up with the roguelikes, witnessed the rise of the \
  roguelites and even the birth of the roguelite-lites? We'd now like to present \
  for your consideration our RogueVania, the illegitimate child of a modern \
  Roguelite (Rogue Legacy, Binding of Isaac, Enter the Gungeon, Spelunky, \
  etc.) and an old-school MetroidVania (Castlevania: SotN and its ilk)."
})

temp_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/placeholder.jpg')
dc.feature.attach(io: temp_feature, filename: 'temp_feature.jpg')

dc_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/dc/dc_header.jpg')
dc.header.attach(io: dc_header, filename: 'dc_header.jpg')

dc_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/dc/dc_1.jpg')
dc.photos.attach(io: dc_1, filename: 'dc_1.jpg')

dc_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/dc/dc_2.jpg')
dc.photos.attach(io: dc_2, filename: 'dc_2.jpg')

dc_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/dc/dc_3.jpg')
dc.photos.attach(io: dc_3, filename: 'dc_3.jpg')

dc_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/dc/dc_4.jpg')
dc.photos.attach(io: dc_4, filename: 'dc_4.jpg')

dc_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/dc/dc_5.jpg')
dc.photos.attach(io: dc_5, filename: 'dc_5.jpg')

mhr = Game.create({
  title: "MONSTER HUNTER RISE",
  price: 59.99,
  genre_1: "action",
  genre_2: "multiplayer",
  short_about: "Rise to the challenge and join the hunt! In Monster Hunter \
  Rise, the latest installment in the award-winning and top-selling Monster \
  Hunter series, you'll become a hunter, explore brand new maps and use a \
  variety of weapons to take down fearsome monsters as part of an all-new \
  storyline.",
  extended_about: "Rise to the challenge and join the hunt! In Monster \
  Hunter Rise, the latest installment in the award-winning and top-selling \
  Monster Hunter series, you'll become a hunter, explore brand new maps and \
  use a variety of weapons to take down fearsome monsters as part of an \
  all-new storyline. The PC release also comes packed with a number of \
  additional visual and performance enhancing optimizations."
})

temp_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/placeholder.jpg')
mhr.feature.attach(io: temp_feature, filename: 'temp_feature.jpg')

mhr_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhr/mhr_header.jpg')
mhr.header.attach(io: mhr_header, filename: 'mhr_header.jpg')

mhr_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhr/mhr_1.jpg')
mhr.photos.attach(io: mhr_1, filename: 'mhr_1.jpg')

mhr_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhr/mhr_2.jpg')
mhr.photos.attach(io: mhr_2, filename: 'mhr_2.jpg')

mhr_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhr/mhr_3.jpg')
mhr.photos.attach(io: mhr_3, filename: 'mhr_3.jpg')

mhr_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhr/mhr_4.jpg')
mhr.photos.attach(io: mhr_4, filename: 'mhr_4.jpg')

mhr_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/mhr/mhr_5.jpg')
mhr.photos.attach(io: mhr_5, filename: 'mhr_5.jpg')

w3 = Game.create({
  title: "The Witcher® 3: Wild Hunt",
  price: 39.99,
  genre_1: "open-world",
  genre_2: "story-rich",
  short_about: "As war rages on throughout the Northern Realms, you take on \
  the greatest contract of your life — tracking down the Child of Prophecy, \
  a living weapon that can alter the shape of the world.",
  extended_about: "The Witcher: Wild Hunt is a story-driven open world RPG \
  set in a visually stunning fantasy universe full of meaningful choices and \
  impactful consequences. In The Witcher, you play as professional monster \
  hunter Geralt of Rivia tasked with finding a child of prophecy in a vast \
  open world rich with merchant cities, pirate islands, dangerous mountain \
  passes, and forgotten caverns to explore."
})

temp_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/placeholder.jpg')
w3.feature.attach(io: temp_feature, filename: 'temp_feature.jpg')

w3_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/w3/w3_header.jpg')
w3.header.attach(io: w3_header, filename: 'w3_header.jpg')

w3_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/w3/w3_1.jpg')
w3.photos.attach(io: w3_1, filename: 'w3_1.jpg')

w3_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/w3/w3_2.jpg')
w3.photos.attach(io: w3_2, filename: 'w3_2.jpg')

w3_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/w3/w3_3.jpg')
w3.photos.attach(io: w3_3, filename: 'w3_3.jpg')

w3_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/w3/w3_4.jpg')
w3.photos.attach(io: w3_4, filename: 'w3_4.jpg')

w3_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/w3/w3_5.jpg')
w3.photos.attach(io: w3_5, filename: 'w3_5.jpg')

ff15 = Game.create({
  title: "FINAL FANTASY XV WINDOWS EDITION",
  price: 34.99,
  genre_1: "open-world",
  genre_2: "JRPG",
  short_about: "Take the journey, now in ultimate quality. Boasting a wealth \
  of bonus content and supporting ultra high-resolution graphical options and \
  HDR 10, you can now enjoy the beautiful and carefully-crafted experience of \
  FINAL FANTASY XV like never before.",
  extended_about: "Get ready to be at the centre of the ultimate fantasy \
  adventure, now for Windows PC.
  Joined by your closest friends on the roadtrip of a lifetime through a \
  breathtaking open world, witness stunning landscapes and encounter \
  larger-than-life beasts on your journey to reclaim your homeland from \
  an unimaginable foe.
  In an action-packed battle system, channel the power of your \
  ancestors to warp effortlessly through the air in thrilling combat, \
  and together with your comrades, master the skills of weaponry, magic \
  and team-based attacks."
})

ff15_feature= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ff15/ff15_feature.jpg')
ff15.feature.attach(io: ff15_feature, filename: 'ff15_feature.jpg')

ff15_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ff15/ff15_header.jpg')
ff15.header.attach(io: ff15_header, filename: 'ff15_header.jpg')

ff15_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ff15/ff15_1.jpg')
ff15.photos.attach(io: ff15_1, filename: 'ff15_1.jpg')

ff15_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ff15/ff15_2.jpg')
ff15.photos.attach(io: ff15_2, filename: 'ff15_2.jpg')

ff15_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ff15/ff15_3.jpg')
ff15.photos.attach(io: ff15_3, filename: 'ff15_3.jpg')

ff15_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ff15/ff15_4.jpg')
ff15.photos.attach(io: ff15_4, filename: 'ff15_4.jpg')

ff15_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ff15/ff15_5.jpg')
ff15.photos.attach(io: ff15_5, filename: 'ff15_5.jpg')

sekiro = Game.create({
  title: "Sekiro™: Shadows Die Twice - GOTY Edition",
  price: 59.99,
  genre_1: "souls-like",
  genre_2: "difficult",
  short_about: "Game of the Year - The Game Awards 2019 Best Action Game of \
  2019 - IGN Carve your own clever path to vengeance in the award winning \
  adventure from developer FromSoftware, creators of Bloodborne and the Dark \
  Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.",
  extended_about: "Carve your own clever path to vengeance in the critically \
  acclaimed adventure from developer FromSoftware, creators of the Dark \
  Souls series.
  In Sekiro™: Shadows Die Twice you are the 'one-armed wolf', a disgraced \
  and disfigured warrior rescued from the brink of death. Bound to protect \
  a young lord who is the descendant of an ancient bloodline, you become \
  the target of many vicious enemies, including the dangerous Ashina clan. \
  When the young lord is captured, nothing will stop you on a perilous quest \
  to regain your honor, not even death itself."
})

temp_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/placeholder.jpg')
sekiro.feature.attach(io: temp_feature, filename: 'temp_feature.jpg')

sekiro_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sekiro/sekiro_header.jpg')
sekiro.header.attach(io: sekiro_header, filename: 'sekiro_header.jpg')

sekiro_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sekiro/sekiro_1.jpg')
sekiro.photos.attach(io: sekiro_1, filename: 'sekiro_1.jpg')

sekiro_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sekiro/sekiro_2.jpg')
sekiro.photos.attach(io: sekiro_2, filename: 'sekiro_2.jpg')

sekiro_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sekiro/sekiro_3.jpg')
sekiro.photos.attach(io: sekiro_3, filename: 'sekiro_3.jpg')

sekiro_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sekiro/sekiro_4.jpg')
sekiro.photos.attach(io: sekiro_4, filename: 'sekiro_4.jpg')

sekiro_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/sekiro/sekiro_5.jpg')
sekiro.photos.attach(io: sekiro_5, filename: 'sekiro_5.jpg')

bio = Game.create({
  title: "BioShock Infinite",
  price: 29.99,
  genre_1: "story-rich",
  genre_2: "action",
  short_about: "Indebted to the wrong people, with his life on the line, \
  veteran of the U.S. Cavalry and now hired gun, Booker DeWitt has only one \
  opportunity to wipe his slate clean. He must rescue Elizabeth, a mysterious \
  girl imprisoned since childhood and locked up in the flying city of Columbia.",
  extended_about: "Indebted to the wrong people, with his life on the line, \
  veteran of the U.S. Cavalry and now hired gun, Booker DeWitt has only one \
  opportunity to wipe his slate clean. He must rescue Elizabeth, a mysterious \
  girl imprisoned since childhood and locked up in the flying city of Columbia. \
  Forced to trust one another, Booker and Elizabeth form a powerful bond during \
  their daring escape. Together, they learn to harness an expanding arsenal \
  of weapons and abilities, as they fight on zeppelins in the clouds, along \
  high-speed Sky-Lines, and down in the streets of Columbia, all while \
  surviving the threats of the air-city and uncovering its dark secret."
})

temp_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/placeholder.jpg')
bio.feature.attach(io: temp_feature, filename: 'temp_feature.jpg')


bio_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bio/bio_header.jpg')
bio.header.attach(io: bio_header, filename: 'bio_header.jpg')

bio_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bio/bio_1.jpg')
bio.photos.attach(io: bio_1, filename: 'bio_1.jpg')

bio_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bio/bio_2.jpg')
bio.photos.attach(io: bio_2, filename: 'bio_2.jpg')

bio_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bio/bio_3.jpg')
bio.photos.attach(io: bio_3, filename: 'bio_3.jpg')

bio_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bio/bio_4.jpg')
bio.photos.attach(io: bio_4, filename: 'bio_4.jpg')

bio_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bio/bio_5.jpg')
bio.photos.attach(io: bio_5, filename: 'bio_5.jpg')

ttm = Game.create({
  title: "To the Moon",
  price: 9.99,
  genre_1: "story-rich",
  genre_2: "emotional",
  short_about: "A story-driven experience about two doctors traversing \
  backwards through a dying man's",
  extended_about: "Dr. Rosalene and Dr. Watts have peculiar jobs: They give \
  people another chance to live, all the way from the very beginning... \
  but only in their patients' heads.
  Due to the severity of the operation, the new life becomes the last thing \
  the patients remember before drawing their last breath. Thus, the operation \
  is only done to people on their deathbeds, to fulfill what they wish they \
  had done with their lives, but didn't.
  This particular story follows their attempt to fulfill the dream of an \
  elderly man, Johnny. With each step back in time, a new fragment of \
  Johnny's past is revealed. As the two doctors piece together the puzzled \
  events that spanned a life time, they seek to find out just why the frail \
  old man chose his dying wish to be what it is."
})

temp_feature = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/placeholder.jpg')
ttm.feature.attach(io: temp_feature, filename: 'temp_feature.jpg')

ttm_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ttm/ttm_header.jpg')
ttm.header.attach(io: ttm_header, filename: 'ttm_header.jpg')

ttm_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ttm/ttm_1.jpg')
ttm.photos.attach(io: ttm_1, filename: 'ttm_1.jpg')

ttm_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ttm/ttm_2.jpg')
ttm.photos.attach(io: ttm_2, filename: 'ttm_2.jpg')

ttm_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ttm/ttm_3.jpg')
ttm.photos.attach(io: ttm_3, filename: 'ttm_3.jpg')

ttm_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ttm/ttm_4.jpg')
ttm.photos.attach(io: ttm_4, filename: 'ttm_4.jpg')

ttm_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/ttm/ttm_5.jpg')
ttm.photos.attach(io: ttm_5, filename: 'ttm_5.jpg')

bye = Game.create({
  title: "Before Your Eyes",
  price: 9.99,
  genre_1: "story-rich",
  genre_2: "emotional",
  short_about: "Embark on an emotional first-person narrative adventure \
  where you control the story—and affect its outcomes—with your real-life \
  blinks. With this innovative technique you will fully immerse yourself in \
  a world of memories, both joyous and heartbreaking, as your whole life \
  flashes before your eyes.",
  extended_about: "Before Your Eyes is a first person narrative adventure \
  which tells the story of a soul's journey into the afterlife using a new \
  and innovative form of interaction—your real-life blinks.
  The story begins after your death, aboard the ship of a mythical Ferryman \
  tasked with shepherding souls to the afterlife. In order to help you pass \
  on, he must first learn the story of your life. And so, he sends you back \
  to relive your most important moments.
  The game uses your webcam to immerse you in this story in a way you've \
  never experienced before. You will learn to control the flow of the \
  narrative with your actual eyes-blinking through precious memories of family, \
  first love, and the rise of an artistic career. But soon the Ferryman will \
  suspect you aren't showing him everything he needs to see. So he will force \
  you deeper into the dark recesses of your most repressed memories, \
  ultimately revealing a heartbreaking truth."
})

bye_feature= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bye/bye_feature.jpg')
bye.feature.attach(io: bye_feature, filename: 'bye_feature.jpg')

bye_header= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bye/bye_header.jpg')
bye.header.attach(io: bye_header, filename: 'bye_header.jpg')

bye_1= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bye/bye_1.jpg')
bye.photos.attach(io: bye_1, filename: 'bye_1.jpg')

bye_2= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bye/bye_2.jpg')
bye.photos.attach(io: bye_2, filename: 'bye_2.jpg')

bye_3= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bye/bye_3.jpg')
bye.photos.attach(io: bye_3, filename: 'bye_3.jpg')

bye_4= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bye/bye_4.jpg')
bye.photos.attach(io: bye_4, filename: 'bye_4.jpg')

bye_5= open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/bye/bye_5.jpg')
bye.photos.attach(io: bye_5, filename: 'bye_5.jpg')