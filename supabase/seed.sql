-- Purani (pehle se hardcoded) photos/videos ko admin panel mein laane ke liye.
-- schema.sql chalane ke BAAD ise ek baar chalayein. Dubara mat chalayein (duplicate ho jayenge).

-- album (9)
insert into public.media (category, media_type, url, created_at) values
  ('album', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520406/a5_hdidhp.jpg', now() - interval '1 seconds'),
  ('album', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520405/a7_ji45sl.jpg', now() - interval '2 seconds'),
  ('album', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520403/a6_r9dmls.jpg', now() - interval '3 seconds'),
  ('album', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520403/a2_psc10v.jpg', now() - interval '4 seconds'),
  ('album', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520403/a4_jhhzso.jpg', now() - interval '5 seconds'),
  ('album', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520403/a1_xazopo.jpg', now() - interval '6 seconds'),
  ('album', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520403/a3_oeqkps.jpg', now() - interval '7 seconds'),
  ('album', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520498/a12_sosddc.jpg', now() - interval '8 seconds'),
  ('album', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520500/a11_py6dnf.jpg', now() - interval '9 seconds');

-- model (9)
insert into public.media (category, media_type, url, created_at) values
  ('model', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519322/m4_pigqbh.jpg', now() - interval '1 seconds'),
  ('model', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519322/m9_i2eltq.jpg', now() - interval '2 seconds'),
  ('model', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519320/m8_ivyn9p.jpg', now() - interval '3 seconds'),
  ('model', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519319/m6_opx8rd.jpg', now() - interval '4 seconds'),
  ('model', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519319/m2_snnl74.jpg', now() - interval '5 seconds'),
  ('model', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519319/m5_fhk9yr.jpg', now() - interval '6 seconds'),
  ('model', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519319/m3_q0sphw.jpg', now() - interval '7 seconds'),
  ('model', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519318/m7_p5w0fx.jpg', now() - interval '8 seconds'),
  ('model', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519317/m1_sn5yk6.jpg', now() - interval '9 seconds');

-- portrait (25)
insert into public.media (category, media_type, url, created_at) values
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471744/p25_mymdcu.jpg', now() - interval '1 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471742/p19_mhsur0.jpg', now() - interval '2 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471741/p26_g1mdfh.jpg', now() - interval '3 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471736/p24_kviuct.jpg', now() - interval '4 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471734/p20_i0z9z9.jpg', now() - interval '5 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471713/p23_rbfala.jpg', now() - interval '6 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471712/p15_nknf2r.jpg', now() - interval '7 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471712/p22_c3yivg.jpg', now() - interval '8 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471643/p7_rq7jue.jpg', now() - interval '9 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471643/p11_mwum2z.jpg', now() - interval '10 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471639/p9_y8rshj.jpg', now() - interval '11 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471645/p6_xlqwes.jpg', now() - interval '12 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471653/p5_u1tqex.jpg', now() - interval '13 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471665/p13_ufbwhg.jpg', now() - interval '14 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471673/p12_rtbdp8.jpg', now() - interval '15 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471679/p16_r1db5r.jpg', now() - interval '16 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471689/p21_r3bs3t.jpg', now() - interval '17 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525807/pic4_f7wpev.png', now() - interval '18 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471679/p17_do574r.jpg', now() - interval '19 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525868/pic15_i6fo8a.jpg', now() - interval '20 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525863/pic16_nefg1o.jpg', now() - interval '21 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525828/pic5_zuypqt.png', now() - interval '22 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525932/pic17_y8zngz.jpg', now() - interval '23 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471699/p18_shwr5u.jpg', now() - interval '24 seconds'),
  ('portrait', 'image', 'https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525833/pic28_buyie0.jpg', now() - interval '25 seconds');

-- reels (5)
insert into public.media (category, media_type, url, created_at) values
  ('reels', 'video', 'https://res.cloudinary.com/djxx3xc6p/video/upload/v1772526589/AQPCbwh5vuIUm4QlIZAcsjPVN3WucqO2989RnbEjgKMljWtOFOPU-vljXBeEq8kcXJPFCljTu11dFSXf6Cv5pjYm8WSViTzvi_sYKg8_z5kmdq.mp4', now() - interval '1 seconds'),
  ('reels', 'video', 'https://res.cloudinary.com/djxx3xc6p/video/upload/f_mp4/v1772528809/IMG_4537_ifzt3f.mov', now() - interval '2 seconds'),
  ('reels', 'video', 'https://res.cloudinary.com/djxx3xc6p/video/upload/f_mp4/v1772527383/IMG_4521_cakhep.mov', now() - interval '3 seconds'),
  ('reels', 'video', 'https://res.cloudinary.com/djxx3xc6p/video/upload/v1772530416/STAR_PALACE_wfazzo.mov', now() - interval '4 seconds'),
  ('reels', 'video', 'https://res.cloudinary.com/djxx3xc6p/video/upload/v1772530176/IMG_4239.MOV_aoifnp.mov', now() - interval '5 seconds');

