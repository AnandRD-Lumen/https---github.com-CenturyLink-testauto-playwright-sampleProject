from playwright.sync_api import Page, expect


def test_example(page: Page) -> None:
    page.goto("https://www.yahoo.com/")
    page.goto("https://search.yahoo.com/search?p=Automation&fr=yfp-t&fr2=p%3Afp%2Cm%3Asb&ei=UTF-8&fp=1")
    page.get_by_role("link", name="Local").click()
