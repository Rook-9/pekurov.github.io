from playwright.sync_api import sync_playwright

def run_test_in_browser(browser_type):
    with sync_playwright() as p:
        browser = p[browser_type].launch()
        page = browser.new_page()
        response = page.goto('https://rook-9.github.io/pekurov.github.io/')
        assert response.status == 200
        browser.close()

def test_status_code_200_chromium():
    run_test_in_browser("chromium")

def test_status_code_200_firefox():
    run_test_in_browser("firefox")

def test_status_code_200_webkit():
    run_test_in_browser("webkit")