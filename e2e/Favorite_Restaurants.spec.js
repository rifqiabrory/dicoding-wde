Feature("Favorite Restaurants");

// 1. Buka halaman favorite (OK)
Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

// 1. Melihat list restaurant yang berada pada posts element (OK)
// 2. Tidak ada favorite restaurant yang ditampilkan (OK)
Scenario("Showing empty favorite restaurants", ({ I }) => {
  I.seeElement(".posts");
  I.see("You don't have any Favorite Cafe or Restaurant!", ".posts");
});

// 1. Buka halaman home (OK)
// 2. Melihat list restaurant yang berada pada posts element (OK)
// 3. Membuka restaurant pertama menuju halaman detail restaurant (OK)
// 4. Melihat detail-post element dan mengambil judul dari restaurant (OK)
// 5. Melihat likeButton element (OK)
// 6. Click likeButton element untuk like restaurant (OK)
// 7. Buka halaman favorite (OK)
// 8. Check favorite restaurant  berhasil like (OK)
Scenario("Liking one favorite restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".posts");
  I.click(locate("a .post").first());

  I.seeElement(".detail-post");
  const itemTitle = await I.grabTextFrom(".detail-post__title");

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeTextEquals(itemTitle, ".post__title");
});

// 1. Tidak ada favorite restaurant yang ditampilkan (OK)
// 2. Membuka halaman home (OK)
// 3. Melihat list restaurant yang berada pada posts element (OK)
// 4. Membuka restaurant pertama menuju halaman detail restaurant (OK)
// 5. Melihat detail-post element dan mengambil judul dari restaurant (OK)
// 6. Melihat likeButton element (OK)
// 7. Click likeButton element untuk like restaurant (OK)
// 8. Buka halaman favorite (OK)
// 9. Melihat list restaurant yang berada pada posts element (OK)
// 10. Check favorite restaurant (OK)
// 11. Membuka restaurant pertama di halaman favorite menuju halaman detail restaurant (OK)
// 12. Melihat likeButton element (OK)
// 13. Click likeButton element untuk unlike restaurant (OK)
// 14. Buka halaman favorite (OK)
// 15. Melihat list restaurant yang berada pada posts element (OK)
// 16. Check favorite restaurant, berhasil unlike (OK)
Scenario("Unliking one favorite restaurant", async ({ I }) => {
  I.see("You don't have any Favorite Cafe or Restaurant!", ".posts");

  I.amOnPage("/");

  I.seeElement(".posts");
  I.click(locate("a .post").first());

  I.seeElement(".detail-post");
  const itemTitle = await I.grabTextFrom(".detail-post__title");

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".posts");
  I.seeTextEquals(itemTitle, ".post__title");

  I.click(locate("a .post").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".posts");

  I.seeTextEquals("You don't have any Favorite Cafe or Restaurant!", ".posts");
});

// 1. Tidak ada favorite restaurant yang ditampilkan (OK)
// 2. Buka halaman home (OK)
// 3. Melihat list restaurant yang berada pada posts element (OK)
// 4. Membuka restaurant pertama menuju halaman detail restaurant (OK)
// 5. Melihat form review pada detail halaman (OK)
// 6. Meng-input fullname dan description di form review (OK)
// 7. Click submit untuk membuat review baru (OK)
// 8. Check review yang telah di-submit (OK)
Scenario("Create a new review", async ({ I }) => {
  I.see("You don't have any Favorite Cafe or Restaurant!", ".posts");

  I.amOnPage("/");

  I.seeElement(".posts");
  I.click(locate("a .post").first());

  I.seeElement(".form_review_wrapper form");

  I.fillField("fullname", "Rifqi Abrory");
  I.fillField("description", "This is awesome restaurant, I want it!");

  I.click("Submit", "#create-review");

  I.seeTextEquals("This is awesome restaurant, I want it!", locate(".user__wrapper .user__info p").last());
});
