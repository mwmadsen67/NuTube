# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demo = User.create({username: "sergeybrin", email: "sergeybrin@nutube.com", password: "demologin"})
mike = User.create({username: "mike", email: "mike@nutube.com", password: "123456"})

testvid1 = Video.create({title: "testvid1", description: "this is the first test video", length: 50, user_id: 1})
video1 = File.open('app/assets/images/test_video.mp4')
testvid1.video_attach.attach(io: video1, filename: 'testvid1')
img1 = File.open('app/assets/images/test_img.png')
testvid1.image.attach(io: img1, filename: 'testimg1')