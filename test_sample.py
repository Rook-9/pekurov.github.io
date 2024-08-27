from playwright.sync_api import sync_playwright

def test_status_code_200():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        response = page.goto('https://rook-9.github.io/pekurov.github.io/')  # Замените на URL вашего сайта
        assert response.status == 200
        browser.close()