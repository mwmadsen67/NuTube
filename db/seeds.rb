# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demo = User.create({username: "Sergey Brin", email: "sergeybrin@nutube.com", password: "demologin"})
mike = User.create({username: "Mike", email: "mike@nutube.com", password: "youtubesucks"})

testvid1 = Video.create({title: "HD Icicles", description: "This is a test video showing icicles dripping some water", length: 16, user_id: 1})
video1 = open("https://s3-us-west-1.amazonaws.com/nutube-dev/Pexels+Videos+1899099.mp4")
testvid1.video_attach.attach(io: video1, filename: 'icicles')
img1 = open("https://s3-us-west-1.amazonaws.com/nutube-dev/test_img.png")
testvid1.image.attach(io: img1, filename: 'testimg1')