# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Dislike.destroy_all
Like.destroy_all
Video.destroy_all
User.destroy_all

demo = User.create!({username: "Demo User", email: "demo_user@nutube.com", password: "youtubesucks"})
mike = User.create!({username: "Mike Madsen", email: "mike@nutube.com", password: "mikemike"})
aram = User.create!({username: "Aram", email: "aram@nutube.com", password: "123456"})
david = User.create!({username: "David", email: "david@nutube.com", password: "123456"})
kevin = User.create!({username: "Kevin", email: "kevin@nutube.com", password: "123456"})
yoni = User.create!({username: "Yoni", email: "yoni@nutube.com", password: "123456"})
abhi = User.create!({username: "Abhi", email: "abhi@nutube.com", password: "123456"})
sam = User.create!({username: "Sam", email: "sam@nutube.com", password: "123456"})
drew = User.create!({username: "Drew", email: "drew@nutube.com", password: "123456"})
vishal = User.create!({username: "Vishal Marquee", email: "vishal@nutube.com", password: "123456"})
got = User.create!({username: "GameofThrones", email: "got@nutube.com", password: "123456"})
nhl = User.create!({username: "NHL", email: "nhl@nutube.com", password: "123456"})
babish = User.create!({username: "Binging with Babish", email: "babish@nutube.com", password: "123456"})
jre = User.create!({username: "JRE Clips", email: "jre@nutube.com", password: "123456"})
keypeele = User.create!({username: "Comedy Central", email: "comedycentral@nutube.com", password: "123456"})
eddie = User.create!({username: "Eddie Vedder", email: "pearljam@nutube.com", password: "654321"})
bubbles = User.create!({username: "Trailer Park Boys", email: "bubbles@nutube.com", password: "999999"})

vid1 = Video.create!({title: "4K Icicles", description: "This is a test video showing icicles dripping some water", length: 16, user_id: mike.id})
video1 = open("https://s3-us-west-1.amazonaws.com/nutube-dev/Pexels+Videos+1899099.mp4")
vid1.video_attach.attach(io: video1, filename: 'icicles')
img1 = open("https://s3-us-west-1.amazonaws.com/nutube-dev/test_img.png")
vid1.image.attach(io: img1, filename: 'icyboys')

vid2 = Video.create!({title: "HD Typing", description: "This is a test video showing some typing", length: 12, user_id: mike.id})
video2 = open("https://s3-us-west-1.amazonaws.com/nutube-dev/Pexels+Videos+3766.mp4")
vid2.video_attach.attach(io: video2, filename: 'typing')
img2 = open("https://s3-us-west-1.amazonaws.com/nutube-dev/Screenshot+from+2019-03-06+16-25-33.png")
vid2.image.attach(io: img2, filename: 'typetypetype')

vid3 = Video.create!({title: "Hack the Mainframe", description: "This is the code they used to program the matrix", length: 16, user_id: mike.id})
video3 = open("https://s3-us-west-1.amazonaws.com/nutube-dev/Matrix%2C+Console%2C+Hacking%2C+Code.mp4")
vid3.video_attach.attach(io: video3, filename: 'matrix')
img3 = open("https://s3-us-west-1.amazonaws.com/nutube-dev/matrix-code.jpg")
vid3.image.attach(io: img3, filename: 'hacker')

vidkeypeele = Video.create!({title: "Key & Peele - East West College Bowl", description: "Today we find out whether Hingle McCringleberry or xwing@aliciousness can take the college bowl", length: 99, user_id: keypeele.id})
videokeypeele = open("https://s3-us-west-1.amazonaws.com/nutube-dev/Key+%26+Peele+-+East+West+College+Bowl.mp4")
vidkeypeele.video_attach.attach(io: videokeypeele, filename: 'eastwest')
imgkeypeele = open("https://s3-us-west-1.amazonaws.com/nutube-dev/IMGkeypeele.png")
vidkeypeele.image.attach(io: imgkeypeele, filename: 'keypeele')

vidalexjones = Video.create!({title: "HUMAN ANIMAL HYBRIDS!!! Joe Rogan and Alex Jones", description: "Alex Jones loses his shit and warns us about the interdimensional globalists", length: 420, user_id: jre.id})
videoalexjones = open("https://s3-us-west-1.amazonaws.com/nutube-dev/HUMAN+ANIMAL+HYBRIDS!!!+Joe+Rogan+%26+Alex+Jones.mp4")
vidalexjones.video_attach.attach(io: videoalexjones, filename: 'jre')
imgalexjones = open("https://s3-us-west-1.amazonaws.com/nutube-dev/IMGhumananimal.png")
vidalexjones.image.attach(io: imgalexjones, filename: 'alexjones')

vidpizza = Video.create!({title: "Binging with Babish Pizza Ball | Eric Andre Show", description: "Time to deliver a pizzaballlll", length: 89, user_id: babish.id})
videoball = open("https://s3-us-west-1.amazonaws.com/nutube-dev/Binging+with+Babish+Pizza+Ball+from+The+Eric+Andre+Show.mp4")
vidpizza.video_attach.attach(io: videoball, filename: 'pizzaball')
imgpizzaball = open("https://s3-us-west-1.amazonaws.com/nutube-dev/IMGpizzabal.png")
vidpizza.image.attach(io: imgpizzaball, filename: 'pizzaball')

vidnhl = Video.create!({title: "NHL Highlights Canadiens vs. Sharks - Mar 7, 2019", description: "The sharks won", length: 330, user_id: nhl.id})
video_nhl = open("https://s3-us-west-1.amazonaws.com/nutube-dev/NHL+Highlights+Canadiens+vs.+Sharks+%E2%80%93+Mar+7%2C+2019.mp4")
vidnhl.video_attach.attach(io: video_nhl, filename: 'nhlhighlights')
imgnhl = open("https://s3-us-west-1.amazonaws.com/nutube-dev/IMGnhlhighlights.png")
vidnhl.image.attach(io: imgnhl, filename: 'nhlimg')

vid_got = Video.create!({title: "Game of Thrones | Season 8 | Official Trailer (HBO)", description: "The trailer is here. #GameofThrones", length: 123, user_id: got.id})
video_got = open("https://s3-us-west-1.amazonaws.com/nutube-dev/Game+of+Thrones+Season+8+Official+Trailer+(HBO).mp4")
vid_got.video_attach.attach(io: video_got, filename: 'got8')
img_got = open("https://s3-us-west-1.amazonaws.com/nutube-dev/IMGGOT.png")
vid_got.image.attach(io: img_got, filename: 'got8img')

vidbrawl = Video.create!({title: "Philidelphia Flyers vs Ottawa Senators Brawl 2004 | NHL Classic HD", description: "One of the all time greatest hockey fights", length: 397, user_id: nhl.id })
videobrawl = open("https://nutube-dev.s3-us-west-1.amazonaws.com/Philadelphia+Flyers+vs+Ottawa+Senators.+Brawl+2004.+NHL+Classic.HD.mp4")
vidbrawl.video_attach.attach(io: videobrawl, filename: "sensflyersbrawl")
imgbrawl = open("https://nutube-dev.s3-us-west-1.amazonaws.com/IMGsensflyers.png")
vidbrawl.image.attach(io: imgbrawl, filename: "brawlimg")

pearljam = Video.create!({title: "Pearl Jam - Jeremy (Official Video)", description: "From the Pearl Jam debut studio album, Ten, released in 1991", length: 333, user_id: eddie.id })
jeremy = open("https://nutube-dev.s3-us-west-1.amazonaws.com/Pearl+Jam+-+Jeremy+(Official+Video).mp4")
pearljam.video_attach.attach(io: jeremy, filename: "jeremy")
imgjeremy = open("https://nutube-dev.s3-us-west-1.amazonaws.com/IMGjeremy.png")
pearljam.image.attach(io: imgjeremy, filename: "pjam")

tpb = Video.create!({title: "Greatest Trailer Park Boys Moment", description: "Bubbles and Alex Lifeson play Closer to the Heart", length: 90, user_id: bubbles.id})
vidtpb = open("https://nutube-dev.s3-us-west-1.amazonaws.com/Greatest+Trailer+Park+Boys+moment.mp4")
tpb.video_attach.attach(io: vidtpb, filename: "rushtpb")
imgtpb = open("https://nutube-dev.s3-us-west-1.amazonaws.com/IMGtpbRush.png")
tpb.image.attach(io: imgtpb, filename: "bubbles")

like1 = Like.create!({user_id: mike.id, video_id: vidkeypeele.id})
like2 = Like.create!({user_id: demo.id, video_id: vidkeypeele.id})
like3 = Like.create!({user_id: aram.id, video_id: vidkeypeele.id})
like4 = Like.create!({user_id: david.id, video_id: vidkeypeele.id})
like5 = Like.create!({user_id: kevin.id, video_id: vidkeypeele.id})
like6 = Like.create!({user_id: yoni.id, video_id: vidkeypeele.id})

dislike1 = Dislike.create!({user_id: mike.id, video_id: vid_got.id})
dislike2 = Dislike.create!({user_id: demo.id, video_id: vid_got.id})
dislike3 = Dislike.create!({user_id: aram.id, video_id: vid_got.id})
dislike4 = Dislike.create!({user_id: david.id, video_id: vid_got.id})
dislike5 = Dislike.create!({user_id: kevin.id, video_id: vid_got.id})
dislike6 = Dislike.create!({user_id: yoni.id, video_id: vid_got.id})

like7 = Like.create!({user_id: mike.id, video_id: pearljam.id})
like8 = Like.create!({user_id: demo.id, video_id: pearljam.id})
like9 = Like.create!({user_id: aram.id, video_id: pearljam.id})
like10 = Like.create!({user_id: david.id, video_id: pearljam.id})
like11 = Like.create!({user_id: kevin.id, video_id: pearljam.id})
like12 = Like.create!({user_id: yoni.id, video_id: pearljam.id})
